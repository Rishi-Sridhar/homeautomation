import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Home2Page } from '../home2/home2';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home=HomePage;
  home2=Home2Page;

}
