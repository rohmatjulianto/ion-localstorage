import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from "../home/home";
import { AddPage } from '../add/add';
import { RecordPage } from '../record/record';


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
  username : string;
  password : string;
  date = new Date().toLocaleString();

  constructor( public alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams) {
    if (localStorage.length != 0  ) {

    } else{
      this.navCtrl.push(AddPage);

    }
  }

  signin(){

    let dataUser = localStorage['name'];
    let dataPass = localStorage['pass'];
    console.log(dataPass, dataUser);
    // let me input the username
    
    
    if (this.username == JSON.parse(dataUser) && this.password == JSON.parse(dataPass)) {
      // apakah tanggal masuknya udah ada?
      let tanggal = localStorage.getItem('login');
      if ( tanggal != null && tanggal.length != 0) {   
        this.navCtrl.push(HomePage);
      }else{
        let user = localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')):[];
        user.push(this.date);
        localStorage.setItem('login', JSON.stringify(user));
        this.navCtrl.push(HomePage);
      } 

    } else {
      console.log(this.username);
      this.showAlert();
    }

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Fatal!!',
      subTitle: 'your username : '+ this.username + '<br> and Password : ' + this.password + ' <br>Wrong!!',
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  remove(){
    localStorage.clear();
    const alert = this.alertCtrl.create({
      subTitle: 'all cleared',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);

  }
  list(){
    this.navCtrl.push(RecordPage);
  }
}
