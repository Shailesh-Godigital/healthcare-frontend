import {
    Header,
    
    FAQ,
    Footer,
   
    // EnquirySurgery,
} from "@/components";
// import { CardDoctor } from "@/components/CardDoctor";
// import { IntroSurgeyPlanning } from "@/components/IntroSurgeryPlanning";
import { Surgery } from "@/components/Surgery";

export default function SurgeryPage() {
    return (
        <>
            <div>
                <Header />
              <Surgery/>
                <FAQ />
                <Footer />
            </div>
        </>
    );
}
