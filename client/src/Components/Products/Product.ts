export interface Product {
  _id: string;
  name: string;
  type: string;
  images: Array<string>;
  description: string;
  price: number;
  reviews: Array<{}>;
}

export interface ProductProps {
  image: string; //solo una
  name: string;
  price: number;
}
