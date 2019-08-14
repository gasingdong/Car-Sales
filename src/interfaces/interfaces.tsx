export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface Car {
  price: number;
  name: string;
  image: string;
  features: Item[];
}

export interface StoreState {
  additionalPrice: number;
  car: Car;
  store: Item[];
}
