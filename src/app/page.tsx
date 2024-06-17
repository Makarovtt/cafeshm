import { AboutUs } from "@/components/main-page/about-us/about-us";
import { DeliverySection } from "@/components/main-page/delivery-section/delivery-section";
import { Footer } from "@/components/footer/footer";
import { GallerySection } from "@/components/main-page/gallery-section/gallery-section";
import { HeaderMain } from "@/components/main-page/main-header/header-main";

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
