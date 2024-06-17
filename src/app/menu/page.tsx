import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { MenuVitrina } from "@/components/menu/menu-page";
import { Vitrina } from "@/components/vitrina/vitrina";
import axios from "axios";

const urlGetProductsDelivery =
  "https://server.cafeshm.ru/get_cafe_products.php";
async function getData() {
  let { data } = await axios.get(urlGetProductsDelivery);
  return data;
}

export default async function PageMenu() {
  const data = await getData();
  return (
    <>
      <Header />
      <MenuVitrina data={data} />
      <Footer className="" />
    </>
  );
}
