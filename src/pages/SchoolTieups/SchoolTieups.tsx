import {
  Header,

  Footer,
  SchoolTieupsCard,

} from "@/components";
import AboutUsSchool from "@/components/SchoolTieupsCard/AboutUsSchool/AboutUsSchool";
import FirstAid from "@/components/SchoolTieupsCard/FirstAid/FirstAid";
import Intro from "@/components/SchoolTieupsCard/Intro/Intro";
import Intro2 from "@/components/SchoolTieupsCard/Intro2/Intro2";
import PartnerMydr24 from "@/components/SchoolTieupsCard/PartnerMydr24/PartnerMydr24";

export default function SchoolTieups() {
  return (
    <>
      <div>
        <Header />
        <SchoolTieupsCard />
        <AboutUsSchool />
        <FirstAid />
        <Intro />
        <Intro2/>
        <PartnerMydr24/>
        <Footer />
      </div>
    </>
  );
}