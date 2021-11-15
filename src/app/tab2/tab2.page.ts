import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import axios from "axios";
import {NavController} from '@ionic/angular';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';

import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  Menus: any = [];

  taskList = [];

  joinId:any;

  menuForm: FormGroup;
  taskName: any;

  constructor(
    private alertController: AlertController,
    public modalController: ModalController,
    public navCtrl: NavController,
    private router: Router,
    public formBuilder: FormBuilder,
    public Loading: LoadingController,
    private zone: NgZone,
    private userCrudService: UserCrudService
    ) {
      // this.menuForm = this.formBuilder.group({
      //   menu: [''],
      //   cnt: [''],
      //   price: ['']
      // })
    }

    addTask() {
      if (this.taskName.length > 0) {
          let task = this.taskName;
          this.taskList.push(task);
          this.taskName = "";
      }
    }

    async addModal() {
      const modal = await this.modalController.create({
        component: ModalpagePage,
        animated: true,
        cssClass: 'dialog-modal'
      });
      return await modal.present();
    }
    
  // onsubmit(){
  //   if (!this.menuForm.valid) {
  //     return false;
  //   } else {
  //     this.userCrudService.createMenu(this.menuForm.value)
  //       .subscribe((Response) => {
  //         this.zone.run(()=> {
  //           this.menuForm.reset();
  //           this.router.navigate(['/tab2']);//여기 리스트 바꾸기
  //         })
  //       });
  //   }
  // }

  deleteTask(index: number){
    this.taskList.splice(index, 1);
  }

  async updateTask(index: string | number) {
    let alert = await this.alertController.create({
      header: '메뉴수정',
      subHeader: '수정할 메뉴의 이름을 입력해주세요.',
      mode: 'ios',
      inputs: [{ name: 'editTask', placeholder: '예) 짜장면' }],
      buttons: [{ text: '취소', role: 'cancel' },
                { text: '확인', handler: data => {
                  this.taskList[index] = data.editTask; }
                }
                ]
    });
    alert.present();
  }
  
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
          handler: () => {
            this.addTask();
          }
        },
        {
          text: '취소',
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

  back(){
    this.navCtrl.back();
  }

  // ionViewDidEnter() {
  //   this.userCrudService.getMenus().subscribe((response) => {
  //     this.Menus = response;
  //   })
  // }

  // removeUser(menu: { id: string; }, i: any) {
  //   if (window.confirm('Are you sure')) {
  //     this.userCrudService.deleteMenu(menu.id)
  //     .subscribe(() => {
  //         this.ionViewDidEnter();
  //         console.log('메뉴 삭제')
  //       }
  //     )
  //   }
  // }

}




// //get
// fetch("https://api-dev.sngy.io/v1/study/board?day=2021-11-09")
//   .then((Response) =>Response.json())
//   .then((data) => console.log(data));


// //post
// fetch("https://api-dev.sngy.io/v1/study/board", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     "day": "2021-11-09",
//     "name": "차성민",
//     "menu": "삼선자장면",
//     "cnt": 1,
//     "price": 8500
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));


