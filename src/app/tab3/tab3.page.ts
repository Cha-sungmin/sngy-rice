import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalCtr: ModalController, private alertController: AlertController){}
  
  ngOnInit() { }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: '주문완료',
      message: '주문이 정상적으로 완료되었습니다',
      backdropDismiss: false,
      mode: 'ios',
      buttons: ['확인'],
    });
    
    await alert.present();

  }
  

}
