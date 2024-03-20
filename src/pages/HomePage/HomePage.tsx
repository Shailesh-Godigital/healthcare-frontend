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
  HomeTestimonial,
} from "@/components";
import OurVision from "@/components/OurVision/OurVision";
import {  useRef } from "react";

export default function HomePage() {
  const enquiryScroll = useRef<HTMLDivElement>(null);


  const scrollToEnquiryForm = () => {
    
    if(enquiryScroll.current){
      enquiryScroll.current.scrollIntoView({behavior:"smooth",block:"start"});
    }
  }

  return (
    <div>
      <Header />
      <Carousel />
      <Cards />
      <OurVision/>
      <MedicineListing/>
      <MedicalEquipment scrollToBottom={scrollToEnquiryForm}/>
      <Labs />
      <OfferBanner/>
      <Banner />
      <FAQ />
      <HomeTestimonial/>
      <div ref={enquiryScroll}><EnquiryForm /></div>
      <Footer />
    </div>
  );
}
