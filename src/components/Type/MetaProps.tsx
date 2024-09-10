export interface MetaProps {
  title: string;
}
export interface ProductCardProps {
  product: ProductDetails;
  grid?: number;
}
export interface ProductDataProps {
  grid?: number;
  slice: number;
}

export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  discount: number;
  brand: string;
  category: string;
  color: string;
  image: string;
  model: string;
  quantity: number;
}

export interface CartState {
  items: ProductDetails[];
}
