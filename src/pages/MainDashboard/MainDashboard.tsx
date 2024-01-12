import {
    Header,
    Footer,
    
  } from "@/components";
import { MainDashboardUi } from "@/components/MainDashboardUi";
import Sidebar from "@/components/Sidebar/Sidebar";
  
  export default function MainDashboard() {
    return (
      <div>
        <Header />
        
        <MainDashboardUi/>
  
        <Footer />
      </div>
    );
  }
  