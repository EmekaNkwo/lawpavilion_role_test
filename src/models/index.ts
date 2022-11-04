export interface IProduct {
  id: number;
  sku: number | string;
  title: string;
  availableSizes: string[];
  avatar: string;
  colors: string[];
  price: number;
  currencyId: string;
  currencyFormat: string;
  outOfStock: boolean;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartTotal {
  productQuantity: number;
  totalPrice: number;
  taxValue: number;
  totalCost: number;
  currencyId: string;
  currencyFormat: string;
}

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  };
}
