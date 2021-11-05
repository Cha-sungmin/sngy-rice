import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  joinId:any;
  navCtrl: any;

  constructor() {}

  Join(){
    console.log(this.joinId);
    this.navCtrl.navigateForward('');
  }

}
