import {
    Header,
    Footer,
    LabVendorTable,
 
  } from "@/components";
import { MainDashboardUi } from "@/components/MainDashboardUi";
import { Sidebar } from "@/components/Sidebar";
  
  export default function LabVendorDashboard() {
    return (
      <div>
        <Header />
        <div className="flex flex-wrap mt-4 ">
                <div className="w-full ml-20 lg:w-3/12 ">
                   
                   <Sidebar/>
                </div>
                <div className="w-full lg:w-7/12 px-4">
                  
                   {/* <DashboardCard/> */}
                   <LabVendorTable />
                </div>
            </div>
  
        <Footer />
      </div>
    );
  }
  