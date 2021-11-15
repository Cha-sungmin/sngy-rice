import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  userName: any;
  
  constructor(private navCtrl: NavController) {} 

  goBack() {
    if (this.userName) {
//       console.log(`${ this.userName }님 환영합니다!`);
      setValue('name', this.userName);
      // getValue('name');
    } else {
      console.log(`userName is null`);
    }
    this.navCtrl.back();
  }
}

const setValue = async (key: string, value: any) => {
  await Storage.set({
    key: key,
    value: value,
  });
};

const getValue = async (key: string) => {
  const { value } = await Storage.get({ key: key });
  console.log(`${ value }님 환영합니다!`);
  return value;
};
