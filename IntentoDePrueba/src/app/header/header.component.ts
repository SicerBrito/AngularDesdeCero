import { Component } from '@angular/core';
import { } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username = 'Sicer';
  users = [
    {
      id: 1,
      username: 'Alan',
      edad: 20
    },
    {
      id: 2,
      username: 'Andres',
      edad: 30
    }
  ];
  isLoggedIn = false;

  greet() {
    
  }
}
