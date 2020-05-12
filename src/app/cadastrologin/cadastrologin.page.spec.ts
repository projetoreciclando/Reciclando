import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastrologinPage } from './cadastrologin.page';

describe('CadastrologinPage', () => {
  let component: CadastrologinPage;
  let fixture: ComponentFixture<CadastrologinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrologinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrologinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
