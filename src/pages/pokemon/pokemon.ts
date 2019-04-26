import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeLinkProvider } from '../../providers/poke-link/poke-link';
import { Storage } from '@ionic/storage';

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

  //Storage Variables
  pokeCall = "pokeName";
  pokeVal : number;
  pokeImg : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private poke : PokeLinkProvider, private storage: Storage) {
  }

  //Initializes the JSON url for display on this page
  ionViewDidLoad() {

    this.storage.get(this.pokeCall).then((val) => {
      
      //If and Else Is Statements for deciding which pokemon has been choosen
      if (val == 1) {
        this.returnBulbasaur();
      }
      else if (val == 2) {
        this.returnIvysaur();
      }
      else if (val == 3) {
        this.returnVenusaur();
      }
      else if (val == 4) {
        this.returnCharmander();
      }
      else if (val == 5) {
        this.returnCharmeleon();
      }
      else if (val == 6) {
        this.returnCharizard();
      }
      else if (val == 7) {
        this.returnSquirtle();
      }
      else if (val == 8) {
        this.returnWartortle();
      }
      else if (val == 9) {
        this.returnBlastoise();
      }
      else {
        //Return Default
        this.returnCharizard();
      }

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

  returnBulbasaur() {
    this.poke.getBulbasaur().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  }

  returnIvysaur() {
    this.poke.getIvysaur().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  }

  returnVenusaur() {
    this.poke.getVenusaur().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  }

  returnCharmander() {
    this.poke.getCharmander().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  }

  returnCharmeleon() {
    this.poke.getCharmeleon().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  }

  returnCharizard() {
    this.poke.getCharizard().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  }

  returnSquirtle() {
    this.poke.getSquirtle().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  }

  returnWartortle() {
    this.poke.getWartortle().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
  }

  returnBlastoise() {
    this.poke.getBlastoise().subscribe(data => {
      this.pokemon = data.forms;
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonType = data.types;
      this.pokeID = data.id.toString();
    });
    this.pokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  }

  

}




