import {
  Header,
  Footer,
  PackageTable,

} from "@/components";
import { AddPackageForm } from "@/components/AddPackageForm";
// import { MainDashboardUi } from "@/components/MainDashboardUi";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";



export default function PackageDashboard() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  // const handelEditPackage = (selectedData: any) => {
  //   console.log(selectedData);
    
  //   setSelectedPackage(selectedData)
  // }
  console.log(setSelectedPackage);
  
  return (
    <div>
      <Header />
      <div className="flex flex-wrap mt-4 ">
        <div className="w-full  pl-20 lg:w-3/12 ">

          <Sidebar />
        </div>
        <div className="w-full  lg:w-8/12 px-4">
          {selectedPackage ? (
            <AddPackageForm packageData={selectedPackage}/>
          ) : (
            <PackageTable />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
