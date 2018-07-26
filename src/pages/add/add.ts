import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  username :string;
  password : string;

  constructor(public alertCtrl :AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  addUser(){

    // let me input the username
    let user = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')):[];
    user.push(this.username);
    localStorage.setItem('name', JSON.stringify(user));

    // let me input the password
    var pasw = localStorage.getItem('pass')? JSON.parse(localStorage.getItem('pass')):[]; // if else "condition? true:false"
    pasw.push(this.password);
    localStorage.setItem('pass', JSON.stringify(pasw));
    this.showAlert();
     return this.navCtrl.popToRoot();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      subTitle: 'Successfuly added , You can login now',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
