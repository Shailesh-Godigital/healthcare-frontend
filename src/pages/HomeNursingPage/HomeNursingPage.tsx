import {
  Header,
  CarouselNursing,
  FAQ,
  Footer,
  OfferBanner,
  IntroductionPage,
  CallbackForm,
  TopNurses,
  Testimonial,

} from "@/components";
import { PhysiotherapyCard } from "@/components/PhysiotherapyCard";

export default function HomePage() {
  return (
    <div>
      <Header />
      <CarouselNursing />
   {/* <Nursinglanding/> */}
   <PhysiotherapyCard/>
    <IntroductionPage/>
      
      {/* <Banner /> */}
      <CallbackForm/>
      <OfferBanner/>
      <TopNurses/>
      <Testimonial/>
      <FAQ />
      {/* <EnquiryForm/> */}
      <Footer />
    </div>
  );
}
