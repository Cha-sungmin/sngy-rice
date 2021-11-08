import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router, private navCtrl: NavController) {}

  hambugarMove(){
    this.router.navigate(['/dark-hambugar']);
  }

  chinesMove(){
    this.router.navigate(['/chines']);
  }

  bunsickMove(){
    this.router.navigate(['/dark-bunsick']);
  }

  porkcutletMove(){
    this.router.navigate(['/dark-porkcutlet']);
  }
  
  japaneseMove(){
    this.router.navigate(['/dark-japanese']);
  }

  westernMove(){
    this.router.navigate(['/dark-westen-style']);
  }

  hansickMove(){
    this.router.navigate(['/dark-hansick']);
  }

  gimtangMove(){
    this.router.navigate(['/gimtang'])
  }

  sulMove(){
    this.router.navigate(['/sul'])
  }

  chikenMove(){
    this.router.navigate(['/chikien'])
  }

  goBack(){
    this.navCtrl.back();
  }


  option = {
    slidesPerView: 1.2,
    // 전체는 1.5
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

}
