import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DarkPorkcutletPage } from './dark-porkcutlet.page';

describe('DarkPorkcutletPage', () => {
  let component: DarkPorkcutletPage;
  let fixture: ComponentFixture<DarkPorkcutletPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkPorkcutletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DarkPorkcutletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
