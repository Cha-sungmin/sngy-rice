import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {

  menuForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: UserCrudService    
  ) {
    this.menuForm = this.formBuilder.group({
      menu: [''],
      cnt: [''],
      price: ['']
    })
  }

  ngOnInit() { }

  onSubmit(){
    if (!this.menuForm.valid) {
      return false;
    } else {
      this.userCrudService.createMenu(this.menuForm.value)
        .subscribe((Response) => {
          this.zone.run(()=> {
            this.menuForm.reset();
            this.router.navigate(['/tab2']);//여기 리스트 바꾸기
          })
        });
    }
  }

}
