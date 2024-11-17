import { Component, OnInit } from '@angular/core';
import { EntrepreneurshipService } from '../../service/entrepreneurship.service';
import { ClientService } from '../../service/client.service'; 
import { EntrepreneurshipInfo } from 'src/app/model/EntrepreneurshipInfo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  entrepreneurship: EntrepreneurshipInfo = {
    nameTitular: '',
    id_card: 0, 
    email: '', 
    nameEntrepreneurship: '',
    idEntrepreneurship: 0,
    logo: '',
    description: ''
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
        
          this.entrepreneurship= { ...response };
          console.log('Información del emprendimiento cargada:', this.entrepreneurship);
        },
        error: (err) => {
          Swal.fire('Error', 'Error al cargar la información del emprendimiento.', 'error');
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
    if (!this.entrepreneurship.description || !this.entrepreneurship.id_card || !this.entrepreneurship.email || !this.entrepreneurship.nameTitular) {
      Swal.fire('Error', 'Por favor, completa todos los campos requeridos.', 'error');
      this.isSuccess = false;
      return; // Salir si hay campos vacíos
    }
  
    // Crea un FormData para enviar los datos
    const formData = new FormData();
    formData.append('NameTitular', this.entrepreneurship.nameTitular); // Nombre del titular
    formData.append('Id_card', this.entrepreneurship.id_card.toString()); // ID del cliente
    formData.append('email', this.entrepreneurship.email); // Email del cliente
    formData.append('NameEntrepreneurship', this.entrepreneurship.nameEntrepreneurship); // Nombre del emprendimiento
    formData.append('Description', this.entrepreneurship.description); // Descripción del emprendimiento
  
    // Si hay un archivo de logo seleccionado, lo agregamos al FormData
    if (this.logoFile) {
      const fileType = this.logoFile.type;
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validImageTypes.includes(fileType)) {
        formData.append('Logo', this.logoFile); // Logo como archivo
      } else {
        Swal.fire('Error', 'Por favor, selecciona un archivo de imagen válido.', 'error');
        this.isSuccess = false;
        return;
      }
    } else {
      // Si no hay imagen seleccionada y ya existe un logo en base64
      if (this.entrepreneurship.logo) {
        // Convertir el string Base64 a un Blob (archivo binario)
        const base64String = this.entrepreneurship.logo.split(',')[1]; // Eliminar el prefijo 'data:image/png;base64,' (si lo tiene)
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
        Swal.fire('Error', 'Información  guardada exitosamente', 'success');

        this.message = 'Información del cliente y del emprendimiento guardadas exitosamente';
        this.isSuccess = true;
      },
      error: (err) => {
        Swal.fire('Error', 'Error al guardar la información del emprendimiento', 'error');

        //this.message = `Error al guardar la información del emprendimiento: ${err.message}`;
        this.isSuccess = false;
      }
    });
  }
  
  

  discardChanges() {
    this.loadData(); // Vuelve a cargar los datos
    this.message = ''; // Resetea el mensaje
  }
}
