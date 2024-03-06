import {
  Header,
  FAQ,
  Footer,
  Cards,
} from "@/components";
// import { CardDoctor } from "@/components/CardDoctor";
import IntroPhysiotherapy from "@/components/IntroPhysiotherapy/IntroPhysiotherapy";
// import { IntroSurgeyPlanning } from "@/components/IntroSurgeryPlanning";
import { PhysiotherapyCard } from "@/components/PhysiotherapyCard";
import { PhysiotherapyDoctor } from "@/components/PhysiotherapyDoctor";
import PhysiotherapyPackage from "@/components/PhysiotherapyPackage/PhysiotherapyPackage";
// import { Card } from "@/components/ui/card";

export default function Physiotherapy() {
  return (
      <>
          <div>
              <Header />
            <IntroPhysiotherapy/>
            <PhysiotherapyCard/>
            <PhysiotherapyDoctor/>
            <Cards/>
            <PhysiotherapyPackage/>
      
              <FAQ />
              <Footer />
          </div>
      </>
  );
}
