import { Footer } from "@/components/footer/footer";
import { Gallery } from "@/components/gallery/gallery";
import { Header } from "@/components/header/header";
import axios from "axios";

const urlGetProductsDelivery = "https://server.cafeshm.ru/get/get_gallery.php";
async function getData() {
  let { data } = await axios.get(urlGetProductsDelivery);
  return data;
}

export default async function MainGalleryPage() {
  const data = await getData();
  return (
    <>
      {" "}
      <Header />
      <Gallery dataGallery={data} />
      <Footer className="" />
    </>
  );
}
