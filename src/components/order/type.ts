export interface DataHumanErrors {
  phone: string;
}

export interface IDataUser {
  phone: string;
}

export interface IDataDelivery {
  street?: string;
  home?: string;
  privateHome?: boolean;
  apartment?: string;
  podyezd?: string;
  floor?: string;
  comment?: string;
}

export type BasketOrder = {
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: number;
  description: string;
};
