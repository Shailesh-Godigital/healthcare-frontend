import { LabVendorTable } from "..";

import Sidebar from "../Sidebar/Sidebar";

export default function MainDashboardUi() {
    return (
        <>
            <div className="flex flex-wrap mt-4 ">
                <div className="w-full ml-20 lg:w-3/12 ">
                   
                   <Sidebar/>
                </div>
                <div className="w-full lg:w-7/12 px-4 ">
                  
                   {/* <DashboardCard/> */}
                   <LabVendorTable />
                </div>
            </div>

        </>
    )
}