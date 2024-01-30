import {
    Header,
    Carousel,
    Cards,
    FAQ,
    Footer,
    EnquiryForm,
    MedicineListing,
  } from "@/components";
  
  export default function Pharmacy() {
    return (
      <div>
        <Header />
        <Carousel />
        <Cards />
        <MedicineListing/>
        {/* <Labs /> */}
        {/* <OfferBanner/> */}
        {/* <Banner /> */}
        <FAQ />
        <EnquiryForm/>
        <Footer />
      </div>
    );
  }
  