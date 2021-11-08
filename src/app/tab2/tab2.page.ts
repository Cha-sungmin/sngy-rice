import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  joinId:any;
  navCtrl: any;


  constructor( private alertController: AlertController) {}

  Join(){
    console.log(this.joinId);
    this.navCtrl.navigateForward('');
  }

  async MenuAdd() {
    const alert = await this.alertController.create({
      cssClass: 'MenuAdd',
      header: '메뉴 추가하기',
      subHeader: '추가할 메뉴의 이름과 수량, 가격를 입력해주세요.',
      mode: 'ios',
      inputs: [
        {
          id: 'menu',
          name: 'menu',
          type: 'text',
          placeholder: '메뉴 이름'
        },
        {
          id: 'count',
          name: 'count',
          type: 'number',
          placeholder: '수량'
        },
        {
          id: 'price',
          name: 'price',
          type: 'number',
          placeholder: '가격'
        }
      ],
      buttons: [
        {
          text: '확인하기',
          cssClass: 'sucsse',
          handler: () => {
            console.log('메뉴 추가');
          }
        },
        {
          text: '취소하기',
          cssClass: 'cancel',
          handler: () => {
            console.log('메뉴 추가 취소');
          }
        }        
      ]
    });
    
    await alert.present();

  }

  async MenuFix() {
    const alert = await this.alertController.create({
      cssClass: 'MenuAdd',
      header: '메뉴 수정하기',
      subHeader: '수정할 메뉴의 이름과 수량, 가격를 입력해주세요.',
      mode: 'ios',
      inputs: [
        {
          id: 'menu',
          name: 'menu',
          type: 'text',
          placeholder: '메뉴 이름'
        },
        {
          id: 'count',
          name: 'count',
          type: 'number',
          placeholder: '수량'
        },
        {
          id: 'price',
          name: 'price',
          type: 'number',
          placeholder: '가격'
        }
      ],
      buttons: [
        {
          text: '수정',
          cssClass: 'sucsse',
          handler: () => {
            console.log('메뉴 수정');
          }
        },
        {
          text: '취소',
          cssClass: 'cancel',
          handler: () => {
            console.log('메뉴 수정 취소');
          }
        }        
      ]
    });
    
    await alert.present();

  }
  
}
