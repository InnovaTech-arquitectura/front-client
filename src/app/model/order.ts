export interface State {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
  state: State;
}

export interface OrderState {
  id: number;
  state: string;
}

export interface Order {
  id: number;
  sale_number: string;
  address: string;
  additional_info: string;
  city: City;
  orderState: OrderState;
}
