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

export default function HomePage() {
  return (
    <div>
      <Header />
      <CarouselNursing />
   
    <IntroductionPage/>
      <OfferBanner/>
      {/* <Banner /> */}
      <CallbackForm/>
      <TopNurses/>
      <Testimonial/>
      <FAQ />
      {/* <EnquiryForm/> */}
      <Footer />
    </div>
  );
}
