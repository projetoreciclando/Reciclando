import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecebevendedorPage } from './recebevendedor.page';

describe('RecebevendedorPage', () => {
  let component: RecebevendedorPage;
  let fixture: ComponentFixture<RecebevendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebevendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecebevendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
