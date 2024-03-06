import {
    Header,
    Carousel,
    Cards,
    FAQ,
    Footer,
    EnquiryForm,
    MedicineListing,
    MedicalEquipment,
  } from "@/components";
  
  export default function Pharmacy() {
    return (
      <div>
        <Header />
        <Carousel />
        <Cards />
        <MedicineListing/>
        <MedicalEquipment/>
        {/* <Labs /> */}
        {/* <OfferBanner/> */}
        {/* <Banner /> */}
        <FAQ />
        <EnquiryForm/>
        <Footer />
      </div>
    );
  }
  