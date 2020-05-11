import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendertrocaPage } from './vendertroca.page';

describe('VendertrocaPage', () => {
  let component: VendertrocaPage;
  let fixture: ComponentFixture<VendertrocaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendertrocaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendertrocaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
