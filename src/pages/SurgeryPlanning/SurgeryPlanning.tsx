import {
    Header,
    
    FAQ,
    Footer,
   
    EnquirySurgery,
} from "@/components";
// import { CardDoctor } from "@/components/CardDoctor";
import { IntroSurgeyPlanning } from "@/components/IntroSurgeryPlanning";

export default function SurgeryPlanning() {
    return (
        <>
            <div>
                <Header />
                <EnquirySurgery/>
           <IntroSurgeyPlanning/>
               
                {/* <Banner /> */}
                <FAQ />
                <Footer />
            </div>
        </>
    );
}
