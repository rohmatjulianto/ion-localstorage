import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {
  username  = JSON.parse(localStorage.getItem('name'));
  password  = JSON.parse(localStorage.getItem('pass'));
  datein  = JSON.parse(localStorage.getItem('login'));
  dateout = JSON.parse(localStorage.getItem('logout'))

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
  }

}
