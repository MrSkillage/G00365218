import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeLinkProvider } from '../../providers/poke-link/poke-link';
import { ThrowStmt } from '@angular/compiler';

/**
 * Generated class for the PokemonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html',
})
export class PokemonPage {

  //Variables used to store poke-link provider info
  pokemon : any = [];
  pokemonType: any = [];
  pokeID : any = [];

  //Variables used in determining the height
  pokemonHeight : any = [];
  centimetersFormat : number = 10;
  feetFormat : number = 30.48;
  height : number;
  littleHeight : number;
  theFinalHeight : string;

  //Variables used to determine the weight
  pokemonWeight : any = [];
  weight : string;
  calWeight : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private poke : PokeLinkProvider) {
  }

  //Initializes the JSON url for display on this page
  ionViewDidLoad() {

    this.poke.getBulbasaur().subscribe(data => {
      this.pokemon = data.forms;
    });
    
    this.poke.getBulbasaur().subscribe(data => {
      this.pokemonHeight = data.height;
    });

    this.poke.getBulbasaur().subscribe(data => {
      this.pokemonWeight = data.weight;
    });

    this.poke.getBulbasaur().subscribe(data => {
      this.pokemonType = data.types;
    });

    this.poke.getBulbasaur().subscribe(data => {
      this.pokeID = data.id.toString();
      console.log(this.pokeID);
    });

  }

  //Method used to calculate the height into a readable format
  heightCalculation(pokemonHeight:number) {
    this.littleHeight = ( (pokemonHeight * this.centimetersFormat) / this.feetFormat );
    this.height = (( (pokemonHeight * this.centimetersFormat) / this.feetFormat ) % 1) * 10;
    this.theFinalHeight = (this.littleHeight.toPrecision(1) + "\'" + this.height.toPrecision(1) + "\"");
    return ""+this.theFinalHeight;
  }

  //Method used to calculate the weight into a readable fromat
  weightCalculation(pokemonWeight:number) {
    this.calWeight = (pokemonWeight / 10);
    this.weight = this.calWeight.toString();
    return ""+this.weight+"Kg";
  }

}




