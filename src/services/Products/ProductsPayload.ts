export interface Product {
  id: number;
  title: string;
  image: any;
  price: number;
  rating: {
    rate: number;
    count: number;
    topComment: string;
  };
}
