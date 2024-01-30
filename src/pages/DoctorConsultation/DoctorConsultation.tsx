import {
    Header,
    FAQ,
    Footer,
    OfferBanner,
   
} from "@/components";
import { CardDoctor } from "@/components/CardDoctor";

export default function DoctorConsultation() {
    return (
        <>
            <div>
                <Header />
                <OfferBanner />
               <CardDoctor/>
               
                {/* <Banner /> */}
                <FAQ />
                <Footer />
            </div>
        </>
    );
}
