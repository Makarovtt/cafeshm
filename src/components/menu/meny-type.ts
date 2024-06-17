export type Goods = {
  id: string;
  category: string;
  category_url: string;
  picture: string;
  description: string;
  title: string;
  price: string;
  portion: string;
  min_portion: string;
  unit: string;
  order_goods: string;
};
export type CatGoods = {
  id: string;
  title: string;
  url: string;
  order_categories: string;
}[];

export type getData = {
  goods: Goods;
  catGoods: CatGoods;
};
