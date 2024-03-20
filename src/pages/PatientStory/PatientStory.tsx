import {
  Header,
  
  Footer,


} from "@/components";
import { PatientStoryCard } from "@/components/PatientStoryCard";

export default function PatientStory() {
  return (
      <>
          <div>
              <Header />
        <PatientStoryCard/>
              <Footer />
          </div>
      </>
  );
}