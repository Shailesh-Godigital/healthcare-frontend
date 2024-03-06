import {
  Header,
  Footer,


} from "@/components";
import { DoctorRegistrationForm } from "@/components/DoctorRegistrationForm";

export default function DoctorRegistration() {
  return (
    <div>
      <Header />
      <br />
      <DoctorRegistrationForm />
      <br />
      <br />
      <Footer />
    </div>
  );
}
