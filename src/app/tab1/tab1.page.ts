import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  hambugarMove(){
    this.router.navigate(['/hambugar']);
  }

  chinesMove(){
    this.router.navigate(['/chines']);
  }

  bunsickMove(){
    this.router.navigate(['/bunsick']);
  }

  porkcutletMove(){
    this.router.navigate(['/porkcutlet']);
  }
  
  japaneseMove(){
    this.router.navigate(['/japanese']);
  }

  westernMove(){
    this.router.navigate(['/western-style']);
  }

  hansickMove(){
    this.router.navigate(['/hansick']);
  }

  LunchAndDinner(){
    this.router.navigate(['tab4']);
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
