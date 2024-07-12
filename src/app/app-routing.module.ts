import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClienteFormComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'bodegas', component: BodegasComponent },
  { path: 'pedidos', component: PedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
