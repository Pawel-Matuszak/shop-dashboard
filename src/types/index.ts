export interface Product {
  discountPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  title: string;
  total: number;
}
export interface Cart {
  id: number;
  total: number;
  products: Product[];
  totalProducts: number;
  totalQuantity: number;
  userId: number;
  discountedTotal: number;
}

export interface PostCartData {
  userId: number;
  products: { id: number; quantity: number }[];
}
