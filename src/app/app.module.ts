import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PokemonPage } from '../pages/pokemon/pokemon';
import { PokeLinkProvider } from '../providers/poke-link/poke-link';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PokemonTypePage } from '../pages/pokemon-type/pokemon-type';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PokemonPage,
    RegisterPage,
    LoginPage,
    PokemonTypePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PokemonPage,
    RegisterPage,
    LoginPage,
    PokemonTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PokeLinkProvider,
  ]
})
export class AppModule {}
