import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //Variables
  public username : string = "";
  public password : string = "";
  public repass : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCon : AlertController) {
  }

  //Method for Alert Message
 async presentAlert() {
   const alert = await this.alertCon.create({
      title: 'Alert Empty Fields',
      message: 'You cannot leave any fields empty',
      buttons: ['OK']
   });
   await alert.present();
 }

 //Checks feilds aren't empty when registering
  registerMe() {
    if(this.username.length==0 || this.password.length==0 || this.repass.length==0) {
      this.presentAlert();
    } else {
      console.log("Okay");
    }
  }

  //Cancels Registration
  cancelRegister() {
    this.navCtrl.pop();
  }

}
