import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastrovendedorPage } from './cadastrovendedor.page';

describe('CadastrovendedorPage', () => {
  let component: CadastrovendedorPage;
  let fixture: ComponentFixture<CadastrovendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrovendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrovendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
