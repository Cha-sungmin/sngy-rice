import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {

    // removeValue('name');

    getValue('name').then((data: any) => {
      if (!data) {
        router.navigate(['/login']);
      }
    });
  }

//   this.getValue('userId').then((data: any) => {
//   data.value ? (this.userId = data.value) : (this.userId = '');
// });
}

const getValue = async (key: string) => {
  const { value } = await Storage.get({ key: key });
  return value;
};

const removeValue = async (key: string) => {
  await Storage.remove({ key: key });
};