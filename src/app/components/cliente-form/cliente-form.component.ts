import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {

  cliente = {
    nombre: '',
    tipoDocumento: '',
    documento: '',
    direccion: '',
    email: ''
  };
  constructor(private clienteService: ClienteService) {}

  onSubmit() {
    this.clienteService.submitCliente(this.cliente).subscribe(
      response => {
        alert('Cliente creado correctamente');
      },
      error => {
        console.error(error);
        alert('Error al crear cliente');
      }
    );
  }

}
