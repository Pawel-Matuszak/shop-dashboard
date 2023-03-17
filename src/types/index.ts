export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface ProductInCart {
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
  products: ProductInCart[];
  totalProducts: number;
  totalQuantity: number;
  userId: number;
  discountedTotal: number;
}

export interface PostCartData {
  userId: number;
  products: {
    id: number;
    quantity: number;
  }[];
}
