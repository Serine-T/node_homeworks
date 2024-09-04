export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: {
    available: number;
  };
  manufacturer: {
    address: {
      street: string;
    };
  };
  deleted: boolean;
}
