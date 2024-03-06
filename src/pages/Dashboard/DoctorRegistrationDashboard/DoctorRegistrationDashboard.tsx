import {
    Header,
    Footer,
   
  
  } from "@/components";
  // import { MainDashboardUi } from "@/components/MainDashboardUi";
  import { Sidebar } from "@/components/Sidebar";
import { DoctorTable } from "@/components/DoctorTable";
  // import EditLabForm from './EditLabForm'; // Import EditLabForm component
  
  const DoctorRegistrationDashboard = () => {
   
  
    return (
      <div>
        <Header />
        <div className="flex flex-wrap mt-4">
          <div className="w-full  pl-20 lg:w-3/12">
            <Sidebar />
          </div>
          <div className="w-full lg:w-8/12 px-4">
         
              <DoctorTable />
           
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
//   export default LabVendorDashboard;
export default DoctorRegistrationDashboard