import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service'; 
import { ClientAccount } from '../../client-account.model';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})

export class PersonalInformationComponent implements OnInit {
  client: ClientAccount = {
    id_card: 0,
    name: '',
    email: ''
  };

  message: string = ''; // Agrega esta línea
  isSuccess: boolean = false; // Agrega esta línea

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    const userId = Number(localStorage.getItem('userId')); 

    //const userId = 2; // ID del usuario que deseas cargar
    this.clientService.getClient(userId)
      .subscribe({
        next: (response) => {
          this.client = response;
          //console.log('Información del cliente cargada:', this.client);
        },
        error: (err) => {
          //console.error('Error al cargar la información del cliente:', err);
        }
      });
  }

  discardChanges() {
    const userId = Number(localStorage.getItem('userId')); 

    //const userId = 12; // ID del usuario que deseas cargar
    this.clientService.getClient(userId)
      .subscribe({
        next: (response) => {
          this.client = response;
          this.message = ''; // Resetea el mensaje al descartar cambios
          //console.log('Información del cliente cargada:', this.client);
        },
        error: (err) => {
          //console.error('Error al cargar la información del cliente:', err);
        }
      });
  }

  saveClientInfo() {
    const userId = Number(localStorage.getItem('userId')); 

    //const userId = 12
    //const userId = Number(localStorage.getItem('userId')); 
    ; // Aseguramos que se use el ID 12
    this.clientService.updateClient(userId, this.client)
      .subscribe({
        next: (response) => {
          //console.log('Información guardada en el servidor:', response);
          this.message = 'Información guardada exitosamente'; // Mensaje de éxito
          this.isSuccess = true; // Establece el estado de éxito
        },
        error: (err) => {
          //console.error('Error al guardar la información:', err);
          this.message = 'Error al guardar la información'; // Mensaje de error
          this.isSuccess = false; // Establece el estado de error
        }
      });
  }
}
