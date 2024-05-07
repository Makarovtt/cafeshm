import { AboutUs } from "@/components/about-us/about-us";
import { DeliverySection } from "@/components/delivery-section/delivery-section";
import { Footer } from "@/components/footer/footer";
import { GallerySection } from "@/components/gallery-section/gallery-section";
import { HeaderMain } from "@/components/header/header-main";

export default function Home() {
  return (
    <main>
      <HeaderMain />
      <AboutUs />
      <DeliverySection />
      <GallerySection />
      <Footer />
    </main>
  );
}
