import { BarSection } from "@/components/bar/bar";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import axios from "axios";

const urlGetProductsDelivery = "https://server.cafeshm.ru/get_bar_products.php";
async function getData() {
  let { data } = await axios.get(urlGetProductsDelivery);
  return data;
}

export default async function PageBar() {
  const data = await getData();
  return (
    <>
      <Header />
      <BarSection data={data} />
      <Footer className="" />
    </>
  );
}
