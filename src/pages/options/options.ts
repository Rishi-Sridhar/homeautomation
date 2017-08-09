import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';

@Component({
  selector: 'page-options',
  template: `
    <ion-list>
      <button ion-item (click)="onAction('turnoff')">Turn off Bluetooth</button>
      <button ion-item (click)="onAction('exit')">Exit App</button>
    </ion-list>
  `,
})
export class OptionsPage {

  constructor(private viewCtrl: ViewController) {
  }

  onAction(action:string) {
    this.viewCtrl.dismiss({action: action});
  }

}
