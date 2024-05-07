import {
    Header,
    
    FAQ,
    Footer,
    TermsAndCondition,
   
    // EnquirySurgery,
} from "@/components";
import { Refund } from "@/components/Refund";
// import { CardDoctor } from "@/components/CardDoctor";
// import { IntroSurgeyPlanning } from "@/components/IntroSurgeryPlanning";


export default function TermsAndConditionPage() {
    return (
        <>
            <div>
                <Header />
        <TermsAndCondition/>
                {/* <FAQ /> */}
                <Footer />
            </div>
        </>
    );
}
