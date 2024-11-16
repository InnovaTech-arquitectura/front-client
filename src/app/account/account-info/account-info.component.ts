import { Component, OnInit } from '@angular/core';
import { EntrepreneurshipService } from '../../service/entrepreneurship.service';
import { ClientService } from '../../service/client.service'; 
import { EntrepreneurshipInfo } from 'src/app/model/EntrepreneurshipInfo';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  entrepreneurship: EntrepreneurshipInfo = {
    NameTitular: '',
    Id_card: 0, 
    email: '', 
    NameEntrepreneurship: '',
    idEntrepreneurship: 0,
    Logo: '',
    Description: ''
  };



  originalEntrepreneurship: EntrepreneurshipInfo; // Variable para almacenar el emprendimiento original

  message: string = ''; // Mensaje de éxito o error
  isSuccess: boolean = false; // Estado de éxito

  private entrepreneurshipId = Number(localStorage.getItem('userId')); 


  //private clientId = 13; // ID del cliente
  //private entrepreneurshipId = 13; // ID del emprendimiento

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
          this.entrepreneurship= { ...response };
          console.log('Información del emprendimiento cargada:', this.entrepreneurship);
        },
        error: (err) => {
          console.error('Error al cargar la información del emprendimiento:', err);
        }
      });

      console.error('ninini');

    
  }

  onLogoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.logoFile = input.files[0]; // Almacena el archivo del logo
    }
  }
  
  saveInfo() {
    // Verifica si los datos son válidos antes de enviar la solicitud
    if (!this.entrepreneurship.Description || !this.entrepreneurship.Id_card || !this.entrepreneurship.email || !this.entrepreneurship.NameTitular) {
      this.message = 'Por favor, completa todos los campos requeridos.';
      this.isSuccess = false;
      return; // Salir si hay campos vacíos
    }
  
    // Crea un FormData para enviar los datos
    const formData = new FormData();
    formData.append('NameTitular', this.entrepreneurship.NameTitular); // Nombre del titular
    formData.append('Id_card', this.entrepreneurship.Id_card.toString()); // ID del cliente
    formData.append('email', this.entrepreneurship.email); // Email del cliente
    formData.append('NameEntrepreneurship', this.entrepreneurship.NameEntrepreneurship); // Nombre del emprendimiento
    formData.append('Description', this.entrepreneurship.Description); // Descripción del emprendimiento
  
    // Si hay un archivo de logo seleccionado, lo agregamos al FormData
    if (this.logoFile) {
      const fileType = this.logoFile.type;
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validImageTypes.includes(fileType)) {
        formData.append('Logo', this.logoFile); // Logo como archivo
      } else {
        this.message = 'Por favor, selecciona un archivo de imagen válido.';
        this.isSuccess = false;
        return;
      }
    } else {
      // Si no hay imagen seleccionada y ya existe un logo en base64
      if (this.entrepreneurship.Logo) {
        // Convertir el string Base64 a un Blob (archivo binario)
        const base64String = this.entrepreneurship.Logo.split(',')[1]; // Eliminar el prefijo 'data:image/png;base64,' (si lo tiene)
        const byteCharacters = atob(base64String); // Decodificar Base64 a bytes
        const byteArrays = [];
        
        // Convertir los bytes en un array de bytes
        for (let offset = 0; offset < byteCharacters.length; offset++) {
          byteArrays.push(byteCharacters.charCodeAt(offset));
        }
        
        // Crear un Blob con los datos binarios
        const blob = new Blob([new Uint8Array(byteArrays)], { type: 'image/png' }); // Asegúrate de que el tipo coincida con el tipo real de la imagen
        formData.append('Logo', blob, 'logo.png'); // Agregar el Blob al FormData
      } else {
        // Si no hay logo y no se seleccionó uno nuevo, enviar un archivo vacío
        const emptyFile = new Blob([], { type: 'application/octet-stream' });
        formData.append('Logo', emptyFile, 'empty-logo.png');
      }
    }
  
    // Llama al servicio para actualizar la información del emprendimiento
    this.entrepreneurshipService.updateEntrepreneurship(this.entrepreneurshipId, formData).subscribe({
      next: (response) => {
        this.message = 'Información del cliente y del emprendimiento guardadas exitosamente';
        this.isSuccess = true;
      },
      error: (err) => {
        this.message = `Error al guardar la información del emprendimiento: ${err.message}`;
        this.isSuccess = false;
      }
    });
  }
  
  

  discardChanges() {
    this.loadData(); // Vuelve a cargar los datos
    this.message = ''; // Resetea el mensaje
  }
}
