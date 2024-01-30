import {
  Header,
  Footer,
  UserManagementTable,
  EditUserProfile,

} from "@/components";
import { useState } from 'react';
// import { MainDashboardUi } from "@/components/MainDashboardUi";
import { Sidebar } from "@/components/Sidebar";
// import EditLabForm from './EditLabForm'; // Import EditLabForm component

const LabVendorDashboard = () => {
  const [selectedVendorData, setSelectedVendorData] = useState(null);

  const handleEditVendor = (selectedData:any) => {
    console.log(selectedData);

    setSelectedVendorData(selectedData);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap mt-4">
        <div className="w-full  pl-20 lg:w-3/12">
          <Sidebar />
        </div>
        <div className="w-full lg:w-8/12 px-4">
          {selectedVendorData ? (
            // If data is available, render EditLabForm
            <EditUserProfile userData={selectedVendorData} />
          ) : (
            // If no data, render LabVendorTable and pass handleEditVendor function as prop
            <UserManagementTable handleEditVendor={handleEditVendor} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LabVendorDashboard;