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
} from "@/components";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Cards />
      <Labs />
      <OfferBanner/>
      <Banner />
      <FAQ />
      <EnquiryForm/>
      <Footer />
    </div>
  );
}
