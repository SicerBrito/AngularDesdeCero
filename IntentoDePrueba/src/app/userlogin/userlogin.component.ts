import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  
  username = 'Alan';
  users = [
    {
      id: 1,
      username: 'Sicer',
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
