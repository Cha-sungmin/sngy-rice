import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { Router } from '@angular/router';
// import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page{

  url: string;

  menus: any = [];
  datas: any = [];

  taskList = [];
  taskName: any;

  today: string;
  // joinId:any;
  // menuForm: FormGroup;

  userName: string;

  constructor(
    private alertController: AlertController,
    public modalController: ModalController,
    public navCtrl: NavController,
    private router: Router,
    public http: HttpClient,
    // public formBuilder: FormBuilder,
    // public Loading: LoadingController,
    // private zone: NgZone,
    private userCrudService: UserCrudService
  ) {
    this.setToday();
    this.setUserName();
  }

  // addTask() {
  //   if (this.taskName.length > 0) {
  //       let task = this.taskName;
  //       this.taskList.push(task);
  //       this.taskName = "";
  //   }
  // }

  // deleteTask(index: number){
  //   this.taskList.splice(index, 1);
  // }

  // async updateTask(index: string | number) {
  //   let alert = await this.alertController.create({
  //     header: '메뉴수정',
  //     subHeader: '수정할 메뉴의 이름을 입력해주세요.',
  //     mode: 'ios',
  //     inputs: [{ name: 'editTask', placeholder: '예) 짜장면' }],
  //     buttons: [{ text: '취소', role: 'cancel' },
  //               { text: '확인', handler: data => {
  //                 this.taskList[index] = data.editTask; }
  //               }
  //               ]
  //   });
  //   alert.present();
  // }

  async MenuAdd() {
    const alert = await this.alertController.create({
      cssClass: 'MenuAdd',
      header: '메뉴추가',
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
          text: '확인',
          cssClass: 'sucsse',
          //handler는 버튼을 눌렀을때 발생함
          handler: (data) => {
            this.postMenuMenu({
              day: this.today, name: this.userName, menu: data.menu,
              cnt: data.count, price: data.price
            });
            this.pageReload();
          }
        },
        {
          text: '취소',
          cssClass: 'cancel',
          handler: () => {}
        }
      ]
    });
    await alert.present();
  }

  async MenuFix() {
    const alert = await this.alertController.create({
      cssClass: 'MenuAdd',
      header: '메뉴수정',
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

  async Check() {
    const alert = await this.alertController.create({
      header: '선택완료',
      message: '주문이 정상적으로 완료되었습니다',
      backdropDismiss: false,
      mode: 'ios',
      buttons: ['확인'],
    });
    await alert.present();
  }

  postMenuMenu(data: { day: string; name: string; menu: any; cnt: any; price: any; }) {
    this.userCrudService.postMenu(data).subscribe((response) => {
      this.menus = response;
      console.log('menu', response);
    });
  }

  getMenuMenu() {
    this.userCrudService.getMenu(this.today).subscribe((response) => {
      this.datas= response;
      console.log('menu',this.datas);
    });
  }

  ionViewDidEnter() {
    this.getMenuMenu();
  }

// 김하늘이 보내준 코드.
// 오늘 날짜를 string 형태로 today에 저장해준다.
setToday() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
  const date = ('0' + newDate.getDate()).slice(-2);
  const hour = newDate.getHours();

  // 점심과 저녁을 맨 앞 1자리의 알파벳으로 구분한다.
  if (hour < 16) {
    this.today = 'L' + year + month + date;
  } else {
    this.today = 'D' + year + month + date;
  }

  this.url = `https://api-dev.sngy.io/v1/study/board?${this.today}`;
}

  setUserName() {
    getValue('name').then((data: any) => {
      this.userName = data;
      console.log(this.userName);
    });
  }

pageReload() {
  this.getMenuMenu();
  // this.get불러오는거();
  location.reload();
}
}

//  로그인 관련 

const getValue = async (key: string) => {
  const { value } = await Storage.get({ key: key });
  return value;
};

const removeValue = async (key: string) => {
  await Storage.remove({ key: key });
};
  