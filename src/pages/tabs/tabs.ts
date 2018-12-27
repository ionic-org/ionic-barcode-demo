import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GeneratePage } from '../generate/generate';
import { IonicPage } from '../ionic/ionic';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GeneratePage;
  tab3Root = IonicPage;

  constructor() {

  }
}
