import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  producto={
    nombre:'',
    descripcion:'',
    categoriaProducto:''
  }

  constructor(private productosService: ProductosService){}
  onSubmit() {
    this.productosService.submitProducto(this.producto).subscribe(
      response => {
        alert('Producto creado correctamente');
      },
      error => {
        console.error(error);
        alert('Error al crear producto');
      }
    );
  }
}
