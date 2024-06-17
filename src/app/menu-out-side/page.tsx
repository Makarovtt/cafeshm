import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Vitrina } from "@/components/vitrina/vitrina";
import axios from "axios";

const urlGetProductsDelivery = "https://server.cafeshm.ru/app.php";
async function getData() {
  let { data } = await axios.get(urlGetProductsDelivery);
  return data;
}

export default async function PageDelivery() {
  const data = await getData();
  return (
    <>
      <Header />
      <Vitrina data={data} />
      <Footer className="" />
    </>
  );
}
