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
