import {
    Header,
   
    FAQ,
    Footer,
    OfferBanner,
   
    IntroTestPage,
  } from "@/components";
import TestIntro from "@/components/TestIntro/TestIntro";
  
  export default function TestPage() {
    return (
      <div>
        <Header />
        {/* <CarouselNursing /> */}
     {/* <Nursinglanding/> */}
     <TestIntro/>
      <IntroTestPage/>
        
        {/* <Banner /> */}
        {/* <CallbackForm/> */}
        <OfferBanner/>
        {/* <TopNurses/> */}
        {/* <Testimonial/> */}
        <FAQ />
        {/* <EnquiryForm/> */}
        <Footer />
      </div>
    );
  }
  