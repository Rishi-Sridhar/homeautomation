import { Component } from '@angular/core';
import {  NavParams, ToastController, ViewController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-btaddress',
  templateUrl: 'btaddress.html',
})
export class BtaddressPage {

  public lists:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, private toastCtrl: ToastController, private bluetooth:BluetoothSerial) {
    this.lists=this.navParams.get('lists');
  }

  onList() {
    this.bluetooth.list().then(y => {
      this.lists = JSON.parse(JSON.stringify(y));

    })
      .catch(err => {
        this.toastCtrl.create({
          message: 'error: ' + err,
          duration: 2500
        }).present();
      });
  }

  onClick(i:number) {
    this.toastCtrl.create({
        message: 'Default Bluetooth address has been changed to: ' + (this.lists[i].address),
        duration: 5000
      }).present();
    this.viewCtrl.dismiss({address:this.lists[i].address});
  }



}
