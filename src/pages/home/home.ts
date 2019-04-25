import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormStyle } from '@angular/common';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//Page Imports
import { PokemonPage } from './../pokemon/pokemon';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Variables
  pokemonName : string[];
  username : string = '';
  password : string;
  keyUser : string = "username";

  constructor(public navCtrl: NavController, private storage : Storage, private alert: AlertController) {

  }

  //Used to sends Alerts
  async presentAlert() {
    const alert = await this.alert.create({
       title: 'Alert Empty Username',
       message: 'Password is not necessary',
       buttons: ['OK']
    });
    await alert.present();
  }

  //Checks for login Username and loads LoginPage
  pageLogin() {

    if (this.username.length == 0) {
      this.presentAlert();
    }
    else
    this.navCtrl.push(LoginPage);
    this.storage.set(this.keyUser, this.username);

  }

  //Pushes RegisterPage
  pageRegister() {
    this.navCtrl.push(RegisterPage);
  }


}
