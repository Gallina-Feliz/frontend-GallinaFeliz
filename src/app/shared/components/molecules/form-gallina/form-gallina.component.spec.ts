import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGallinaComponent } from './form-gallina.component';

describe('FormGallinaComponent', () => {
  let component: FormGallinaComponent;
  let fixture: ComponentFixture<FormGallinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGallinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGallinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
