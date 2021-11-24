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

  constructor(private navCtrl: NavController) { }

  goBack() {
    if (this.userName) {
      setValue('name', this.userName);
      this.navCtrl.back();
    } else {
      console.log('이름 입력하고 다시오셈')
    }
  }

  onChange(e) {
    this.userName = e.target.value;
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
  return value;
};
