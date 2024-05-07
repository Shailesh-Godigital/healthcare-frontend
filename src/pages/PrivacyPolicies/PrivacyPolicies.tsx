import {
    Header,
    
 
    Footer,
   
    // EnquirySurgery,
} from "@/components";
// import { CardDoctor } from "@/components/CardDoctor";
// import { IntroSurgeyPlanning } from "@/components/IntroSurgeryPlanning";

import { Privacy } from "../Privacy";

export default function privacyPolicies() {
    return (
        <>
            <div>
                <Header />
              <Privacy/>
                {/* <FAQ /> */}
                <Footer />
            </div>
        </>
    );
}
