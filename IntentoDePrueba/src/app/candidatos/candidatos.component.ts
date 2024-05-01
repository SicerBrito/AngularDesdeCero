import { Component } from '@angular/core';
import { } from 'bootstrap';

@Component({
  selector: 'app-candidatos',
  standalone: true,
  imports: [],
  templateUrl: './candidatos.component.html',
  styleUrl: './candidatos.component.css'
})
export class CandidatosComponent {
  candidatos = [
    {
      id: 1,
      nombre: 'Alan',
      edad: 20
    },
    {
      id: 2,
      nombre: 'Andres',
      edad: 30
    },
    {
      id: 3,
      nombre: 'Sicer',
      edad: 40
    },
    {
      id: 4,
      nombre: 'Juan',
      edad: 50
    },
    {
      id: 5,
      nombre: 'Pedro',
      edad: 60
    },
    {
      id: 6,
      nombre: 'Maria',
      edad: 70
    },
    {
      id: 7,
      nombre: 'Jose',
      edad: 80
    },
    {
      id: 8,
      nombre: 'Juan',
      edad: 90
    },
  ]

  greet() {
    
  }
}
