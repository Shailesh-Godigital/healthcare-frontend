import {
    Header,
    
    FAQ,
    Footer,
   
    // EnquirySurgery,
} from "@/components";
import { Refund } from "@/components/Refund";
// import { CardDoctor } from "@/components/CardDoctor";
// import { IntroSurgeyPlanning } from "@/components/IntroSurgeryPlanning";


export default function RefundPage() {
    return (
        <>
            <div>
                <Header />
              <Refund/>
                {/* <FAQ /> */}
                <Footer />
            </div>
        </>
    );
}
