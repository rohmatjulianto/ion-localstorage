import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dateout = new Date().toLocaleString();
  username  = JSON.parse(localStorage.getItem('name'));
  password  = JSON.parse(localStorage.getItem('pass'));
  date  = JSON.parse(localStorage.getItem('login'));
  constructor(public navCtrl: NavController) {
    // for (let i = 0; i < data.length; i++) {
    //   this.user.push(data[i]);
    // }
    console.log();
  }
  logout(){
    let date = [];
    date.push(this.dateout);
    localStorage.setItem('logout', JSON.stringify(date));
    this.navCtrl.popToRoot();
  }

}
