// Component Raiz
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { UserloginComponent } from './userlogin/userlogin.component';

// Decorador
@Component({
  selector: 'app-root',
  standalone: true, // Si queremos utilizar algun modulo lo colocamos dentro de este componente dentro del imports
  imports: [RouterOutlet, CandidatosComponent, HeaderComponent, UserloginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Madrid';
  title = 'IntentoDePrueba';
}
