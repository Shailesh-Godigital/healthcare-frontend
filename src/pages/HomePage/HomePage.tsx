import {
  Header,
  Carousel,
  Cards,
  FAQ,
  Footer,
  Labs,
  Banner,
  EnquiryForm,
  OfferBanner,
  MedicineListing,
  MedicalEquipment,
} from "@/components";
import OurVision from "@/components/OurVision/OurVision";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Cards />
      <OurVision/>
      <MedicineListing/>
      <MedicalEquipment/>
      <Labs />
      <OfferBanner/>
      <Banner />
      <FAQ />
      <EnquiryForm/>
      <Footer />
    </div>
  );
}
