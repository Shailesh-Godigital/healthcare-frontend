import {
    Header,
    // CarouselNursing,
    FAQ,
    Footer,
    // OfferBanner,
    // IntroductionPage,
    // CallbackForm,
    // TopNurses,
    // Testimonial,
    // Nursinglanding,
    // IntroTestPage,
    // Banner,
    // EnquirySurgery,
} from "@/components";
// import { CardDoctor } from "@/components/CardDoctor";
import DiagnosticPackage from "@/components/DiagnosticPackage/DiagnosticPackage";
import { IntroDiagnostic } from "@/components/IntroDiagnostic";
// import { IntroSurgeyPlanning } from "@/components/IntroSurgeryPlanning";

export default function Diagnostic() {
    return (
        <>
            <div>
                <Header />
               <IntroDiagnostic/>
               <DiagnosticPackage/>
           {/* <IntroSurgeyPlanning/> */}
               
                {/* <Banner /> */}
                <FAQ />
                <Footer />
            </div>
        </>
    );
}
