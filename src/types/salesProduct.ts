export interface TSeller {
  _id: string;
  email?: string;
  role: string;
}

export interface TSalesProduct {
  _id: string;
  invoice: string;
  sellerRole: string;
  user: string;
  name: string;
  seller: TSeller;
  buyer: string;
  quantity: number;
  brand: string;
  size: string;
  code: string;
  price: number;
  date: string;
}
