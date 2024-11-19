import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDeputadosComponent } from './buscar-deputados.component';

describe('BuscarDeputadosComponent', () => {
  let component: BuscarDeputadosComponent;
  let fixture: ComponentFixture<BuscarDeputadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarDeputadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
