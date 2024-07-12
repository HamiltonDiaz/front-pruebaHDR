import { Component } from '@angular/core';
import { BodegasService } from '../../services/bodegas.service';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrl: './bodegas.component.css'
})
export class BodegasComponent {
    bodega={
      nombre:'',
      direccion:'',
      ciudad:'',
      estado:'',
      pais:'',
      codigoPostal:'',
      capacidadAlmacenamiento:'',
      tipoBodega:''
  };

  constructor(private bodegaService: BodegasService){}
  onSubmit() {
    this.bodegaService.submitBodega(this.bodega).subscribe(
      response => {
        alert('Bodega creada correctamente');
      },
      error => {
        console.error(error);
        alert('Error al crear bodega');
      }
    );
  }

}
