import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGallinaComponent } from './formulario-gallina.component';

describe('FormularioGallinaComponent', () => {
  let component: FormularioGallinaComponent;
  let fixture: ComponentFixture<FormularioGallinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioGallinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioGallinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
