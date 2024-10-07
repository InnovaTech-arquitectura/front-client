import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false; // Initialize isLoading to false

  constructor() {}

  onSubmit() {
    this.isLoading = true;
    // Simulate a login process. Replace this with your actual login logic.
    setTimeout(() => {
      this.isLoading = false;
      // Add your logic for successful or failed login here.
      console.log('Login process completed.');
    }, 2000); // Simulate a delay of 2 seconds
  }
}
