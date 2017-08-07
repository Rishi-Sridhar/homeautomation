import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Component } from '@angular/core';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lists:any=[];

  constructor(private bluetooth:BluetoothSerial, private toastCtrl:ToastController) {
  }

  on() {
    this.bluetooth.list().then(y => {
      this.lists=JSON.stringify(y[0]['name']);
      this.toastCtrl.create({
        message:'list of devices: '+(this.lists),
        duration: 5000
      }).present();
    })
    .catch(err => {
      this.toastCtrl.create({
        message:'error: '+err,
        duration: 5000
      }).present();
    });

    this.bluetooth.connectInsecure('20:13:03:13:02:58');
    this.bluetooth.isConnected().then(data => {
      this.toastCtrl.create({
        message:'bluetooth connected '+data,
        duration: 5000
      }).present();

       this.bluetooth.write("light on")
    .then(y => {
      this.toastCtrl.create({
        message:'wrote '+y,
        duration: 5000
      }).present();
    })
    .catch(err => {
      this.toastCtrl.create({
        message:'error: '+err,
        duration: 5000
      }).present();
    })
    })
  .catch(
    error => {
      this.toastCtrl.create({
        message:'Bluetooth not connected: '+error,
        duration: 5000
      }).present();
    }
  )

  }
  off() {
    this.bluetooth.connectInsecure('20:13:03:13:02:58').subscribe((data)=> {
      this.toastCtrl.create({
        message:'connected '+data,
        duration: 5000
      }).present();

       this.bluetooth.write("light off")
    .then(y => {
      this.toastCtrl.create({
        message:'wrote '+y,
        duration: 5000
      }).present();
    })
    .catch(err => {
      this.toastCtrl.create({
        message:'error: '+err,
        duration: 5000
      }).present();
    })
    });
  }

}
