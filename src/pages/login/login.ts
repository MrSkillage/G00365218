import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { PokemonPage } from '../pokemon/pokemon';
import { PokemonTypePage } from '../pokemon-type/pokemon-type';
import { PokeLinkProvider } from '../../providers/poke-link/poke-link';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //Variables
  pokeCall = "pokeName";
  username : string;
  keyUser : string = "username";
  pokemonSearch : string = "";
  finalPokemonSearch : string;
  isLoading : boolean = true;;
  finalPokemonName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private loadCon: LoadingController, private poke: PokeLinkProvider, 
    private storage: Storage) {
      
  }

  //Retrieve Stored Information
  ionViewDidLoad() {
    this.storage.get(this.keyUser).then((val) => {
      this.username = val;
    });

  }

  //Method for calling PokemonPage
  getPokemon(name: number) {
    this.storage.set(this.pokeCall, name);
    this.navCtrl.push(PokemonPage);
  }

  //Method for calling PokemonTypePage
  displayType() {
    this.navCtrl.push(PokemonTypePage);
  }

}
