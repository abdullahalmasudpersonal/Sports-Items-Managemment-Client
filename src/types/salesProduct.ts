export interface TSeller {
  _id: string;
  email?: string;
  role: string;
}

export interface TSalesProduct {
  _id: string;
  name: string;
  seller: TSeller;
  buyer: string;
  quantity: number;
  price: number;
  date: string;
}
