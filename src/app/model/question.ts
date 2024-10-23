export interface Question {
    id?: number; // El ID puede ser opcional al crear
    question: string;
    answer?: string | null; // La respuesta puede ser nula
    business: string; // Añade el campo de negocio
  }
  