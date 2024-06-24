import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../features/salud-gallinas/services/api-form/api.service';

@Component({
  selector: 'app-form-gallina',
  templateUrl: './form-gallina.component.html',
  styleUrls: ['./form-gallina.component.css']
})
export class FormGallinaComponent {
  GallinaForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.GallinaForm = this.fb.group({
      codigo_gallina: [''],
      raza: [''],
      edad: [''],
      numero_galpon: [''],
      huevos_diarios: [''],
      temp: [''],
      esta_enferma: [''],
      que_enfermedad: [''],
      medicamentos: ['']
    });
  }

  onSubmit(): void {
    this.apiService.crearGallina(this.GallinaForm.value).subscribe(
      response => {
        this.showSuccess('Gallina guardada correctamente');
        this.GallinaForm.reset();
      },
      error => {
        this.showError('Error al guardar la gallina');
      }
    );
  }

  showSuccess(message: string): void {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }

  showError(message: string): void {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
}
