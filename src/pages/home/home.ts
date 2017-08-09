import { BtaddressPage } from './../btaddress/btaddress';
import { Diagnostic } from '@ionic-native/diagnostic';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Component } from '@angular/core';
import {ModalController, PopoverController,  ToastController,  Platform} from 'ionic-angular';
import { OptionsPage } from '../options/options';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lists: any = [];
  public myBluetoothAddress: string = '20:13:03:13:02:58';

  constructor(private bluetooth: BluetoothSerial, private toastCtrl: ToastController, private diag: Diagnostic, private platform: Platform, private popoverCtrl: PopoverController, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.bluetooth.isEnabled().then(suc => {
      this.toastCtrl.create({
        message: 'Bluetooth is enabled ' + suc,
        duration: 5000
      }).present();
    })
      .catch(err => {
        this.enableBT();
        this.toastCtrl.create({
          message: 'Bluetooth is disabled ' + err,
          duration: 5000
        }).present();
      })
  }

  async enableBT() {
    try {
      await this.bluetooth.enable()
        .catch(err => {
          this.toastCtrl.create({
            message: 'You need to enable bluetooth manually to use the app... ',
            duration: 2500
          }).present();
          return;
        })
        .then(data => {
          this.toastCtrl.create({
            message: 'Bluetooth has been enabled ' + data,
            duration: 2500
          }).present();
          return;
        });
    }
    catch (e) {
      this.toastCtrl.create({
        message: 'Error wait for Bluetooth ' + e,
        duration: 2500
      }).present();
    }
  }

  onEnableBT() {
    this.enableBT();
  }

  lightOn() {


    try {
      this.bluetooth.isEnabled().then(suc => {
        this.bluetooth.connectInsecure(this.myBluetoothAddress).subscribe((data) => {
          this.toastCtrl.create({
            message: 'connected ' + data,
            duration: 2500
          }).present();

          this.bluetooth.write("light on")
            .then(y => {
              this.toastCtrl.create({
                message: 'wrote ' + y,
                duration: 2500
              }).present();
            })
            .catch(err => {
              this.toastCtrl.create({
                message: 'error: ' + err,
                duration: 2500
              }).present();
            })
        },
          (err => {
            this.toastCtrl.create({
              message: 'error: ' + err,
              duration: 2500
            }).present();
          }));
      })
        .catch(err => {
          this.enableBT();
        })
    } catch (e) {
      this.toastCtrl.create({
        message: 'error inside try catch: ' + e,
        duration: 2500
      }).present();
    }

  }


  lightOff() {
    this.bluetooth.isEnabled().then(suc => {
      this.bluetooth.connectInsecure(this.myBluetoothAddress).subscribe((data) => {
        this.toastCtrl.create({
          message: 'connected ' + data,
          duration: 2500
        }).present();

        this.bluetooth.write("light off")
          .then(y => {
            this.toastCtrl.create({
              message: 'wrote ' + y,
              duration: 2500
            }).present();
          })
          .catch(err => {
            this.toastCtrl.create({
              message: 'error: ' + err,
              duration: 2500
            }).present();
          })
      })
    })
      .catch(err => {
        this.enableBT();
      })
  }


  fanOn() {
    this.bluetooth.isEnabled().then(suc => {
      this.bluetooth.connectInsecure(this.myBluetoothAddress).subscribe((data) => {
        this.toastCtrl.create({
          message: 'connected ' + data,
          duration: 2500
        }).present();

        this.bluetooth.write("fan on")
          .then(y => {
            this.toastCtrl.create({
              message: 'wrote ' + y,
              duration: 2500
            }).present();
          })
          .catch(err => {
            this.toastCtrl.create({
              message: 'error: ' + err,
              duration: 2500
            }).present();
          })
      },
        (err => {
          this.toastCtrl.create({
            message: 'error: ' + err,
            duration: 2500
          }).present();
        })
      )
    }).catch(err => {
      this.enableBT();
    })
  }


  fanOff() {
    this.bluetooth.isEnabled().then(suc => {
      this.bluetooth.connectInsecure(this.myBluetoothAddress).subscribe((data) => {
        this.toastCtrl.create({
          message: 'connected ' + data,
          duration: 2500
        }).present();

        this.bluetooth.write("fan off")
          .then(y => {
            this.toastCtrl.create({
              message: 'wrote ' + y,
              duration: 2500
            }).present();
          })
          .catch(err => {
            this.toastCtrl.create({
              message: 'error: ' + err,
              duration: 2500
            }).present();
          })
      });
    }).catch(err => {
      this.enableBT();
    })
  }

  allOn() {
    this.bluetooth.isEnabled().then(suc => {
      this.bluetooth.connectInsecure(this.myBluetoothAddress).subscribe((data) => {
        this.toastCtrl.create({
          message: 'connected ' + data,
          duration: 2500
        }).present();

        this.bluetooth.write("all on")
          .then(y => {
            this.toastCtrl.create({
              message: 'wrote ' + y,
              duration: 2500
            }).present();
          })
          .catch(err => {
            this.toastCtrl.create({
              message: 'error: ' + err,
              duration: 2500
            }).present();
          })
      });
    }).catch(err => {
      this.enableBT();
    })
  }


  allOff() {
    this.bluetooth.isEnabled().then(suc => {
      this.bluetooth.connectInsecure(this.myBluetoothAddress).subscribe((data) => {
        this.toastCtrl.create({
          message: 'connected ' + data,
          duration: 2500
        }).present();

        this.bluetooth.write("all off")
          .then(y => {
            this.toastCtrl.create({
              message: 'wrote ' + y,
              duration: 2500
            }).present();
          })
          .catch(err => {
            this.toastCtrl.create({
              message: 'error: ' + err,
              duration: 2500
            }).present();
          })
      });
    }).catch(err => {
      this.enableBT();
    })
  }


  turnoff() {
    this.diag.setBluetoothState(false).then(() => {
      this.toastCtrl.create({
        message: 'Bluetooth has been disabled',
        duration: 2500
      }).present();
    });
  }

  onExit() {
    this.platform.exitApp();
  }

  onShowOptions(event: MouseEvent) {
    let popover = this.popoverCtrl.create(OptionsPage);
    popover.present({ ev: event });
    popover.onDidDismiss(data => {
      if (data == null) { console.log("Clicked on backdrop"); return; }
      else if (data.action == 'turnoff') {
        this.turnoff();
      }
      else if (data.action == 'exit') {
        this.onExit();
      }
      else if (data.action == 'list') {
        this.onList();
      }
    })
  }

  onList() {

    const modal = this.modalCtrl.create(BtaddressPage,{lists:this.lists});
    modal.present();
    modal.onDidDismiss(data=> {
      if(data) {
        this.myBluetoothAddress = data.address;
      }
    })

  }

  onClick(i:number) {
    this.toastCtrl.create({
        message: 'Default Bluetooth address has been changed to: ' + (this.lists[i].address),
        duration: 5000
      }).present();
    this.myBluetoothAddress=this.lists[i].address;
  }

}
