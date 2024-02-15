import {
    Header,
   
    FAQ,
    Footer,
   
  } from "@/components";
import TestIntro from "@/components/TestIntro/TestIntro";
  
  export default function TestPage() {
    return (
      <div>
        <Header />
        {/* <CarouselNursing /> */}
     {/* <Nursinglanding/> */}
     <TestIntro/>
      
        <FAQ />
        {/* <EnquiryForm/> */}
        <Footer />
      </div>
    );
  }
  