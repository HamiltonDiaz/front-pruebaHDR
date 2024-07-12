import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { nombre: '', clave: '' };
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/cliente-form']);
        } else {
          alert('Usuario o contraseña incorrecta');
        }
      }
    );
  }
}
