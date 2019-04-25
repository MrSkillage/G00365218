import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokemonTypePage } from './pokemon-type';

@NgModule({
  declarations: [
    PokemonTypePage,
  ],
  imports: [
    IonicPageModule.forChild(PokemonTypePage),
  ],
})
export class PokemonTypePageModule {}
