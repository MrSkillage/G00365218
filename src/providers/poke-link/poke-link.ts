import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the PokeLinkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeLinkProvider {

  pokemonName: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(public http: HttpClient) {
    console.log('Hello PokeLinkProvider Provider');
  }

  getBulbasaur() : Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  }

  getIvysaur() : Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ivysaur");
  }

  getVenusaur() : Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/venusaur");
  }

}
