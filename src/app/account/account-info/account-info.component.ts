import { Component, OnInit } from '@angular/core';
import { EntrepreneurshipService } from '../../service/entrepreneurship.service';
import { Entrepreneurship } from '../../entrepreneurship.model';
import { ClientService } from '../../service/client.service'; 
import { ClientAccount } from '../../client-account.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  entrepreneurship: Entrepreneurship = {
    id: -1,
    name: "sss",
    logo: '', 
    description: ''
  };

  client: ClientAccount = {
    id_card: -1,
    name: '',
    email: ''
  };

  originalClient: ClientAccount; // Variable para almacenar el cliente original
  originalEntrepreneurship: Entrepreneurship; // Variable para almacenar el emprendimiento original

  message: string = ''; // Mensaje de éxito o error
  isSuccess: boolean = false; // Estado de éxito

  private clientId = 13; // ID del cliente
  private entrepreneurshipId = 13; // ID del emprendimiento

  logoFile: File | null = null;

  constructor(
    private entrepreneurshipService: EntrepreneurshipService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.entrepreneurshipService.getEntrepreneurship(this.entrepreneurshipId)
      .subscribe({
        next: (response) => {
          this.originalEntrepreneurship = { ...response }; // Copia del emprendimiento original
          this.entrepreneurship = response;
          console.log('Información del emprendimiento cargada:', this.entrepreneurship);
        },
        error: (err) => {
          console.error('Error al cargar la información del emprendimiento:', err);
        }
      });
    
    this.clientService.getClient(this.clientId)
      .subscribe({
        next: (response) => {
          this.originalClient = { ...response }; // Copia del cliente original
          this.client = response; 
          console.log('Información del cliente cargada:', this.client);
        },
        error: (err) => {
          console.error('Error al cargar la información del cliente:', err);
        }
      });
  }

  onLogoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.logoFile = input.files[0]; // Almacena el archivo del logo
    }
  }
  
  saveInfo() {
    // Verifica si los datos son válidos antes de enviar la solicitud
    if (!this.client.name || !this.client.id_card || !this.client.email || !this.entrepreneurship.name || !this.entrepreneurship.description) {
      console.log('Hay campos requeridos que no están completos.');
      this.message = 'Por favor, completa todos los campos requeridos.';
      this.isSuccess = false;
      return; // Salir si hay campos vacíos
    }

    // Crea un FormData para enviar los datos
    const formData = new FormData();
    formData.append('NameTitular', this.client.name); // Nombre del titular
    formData.append('Id_card', this.client.id_card.toString()); // ID del cliente
    formData.append('email', this.client.email); // Email del cliente
    formData.append('NameEntrepreneurship', this.entrepreneurship.name); // Nombre del emprendimiento
    formData.append('Description', this.entrepreneurship.description); // Descripción del emprendimiento

    if (this.logoFile) {
      const fileType = this.logoFile.type;
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validImageTypes.includes(fileType)) {
        formData.append('Logo', this.logoFile); // Logo como archivo
      } else {
        console.log('El archivo seleccionado no es una imagen válida.');
        this.message = 'Por favor, selecciona un archivo de imagen válido.';
        this.isSuccess = false;
        return;
      }
    }
  
    // Llama a los servicios para guardar la información del cliente y del emprendimiento
    this.clientService.updateClient(this.clientId, this.client)
      .subscribe({
        next: (response) => {
          console.log('Información del cliente guardada en el servidor:', response);
          this.entrepreneurshipService.updateEntrepreneurship(this.entrepreneurshipId, formData)
            .subscribe({
              next: (response) => {
                console.log('Información del emprendimiento guardada en el servidor:', response);
                this.message = 'Información del cliente y del emprendimiento guardadas exitosamente'; // Mensaje de éxito
                this.isSuccess = true; // Establece el estado de éxito
              },
              error: (err) => {
                console.log('Error al guardar la información del emprendimiento:', err);
                this.message = `Error al guardar la información del emprendimiento: ${err.message}`; // Mensaje de error más detallado
                this.isSuccess = false; // Establece el estado de error
              }
            });
        },
        error: (err) => {
          console.error('Error al guardar la información del cliente:', err);
          this.message = 'Error al guardar la información del cliente'; // Mensaje de error
          this.isSuccess = false; // Establece el estado de error
        }
      });
  }

  discardChanges() {
    this.loadData(); // Vuelve a cargar los datos
    this.message = ''; // Resetea el mensaje
  }
}
