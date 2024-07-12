import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { ProductosComponent } from './components/productos/productos.component';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteFormComponent,
    NavbarComponent,
    ProductosComponent,
    BodegasComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
