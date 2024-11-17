export interface Plan {
  id: number;
  name: string;
  price: number;
  planId: number;
  description?: string; // Optional field for the description
  planFunctionalities?: any[]; // Optional array for functionalities associated with the plan
}
