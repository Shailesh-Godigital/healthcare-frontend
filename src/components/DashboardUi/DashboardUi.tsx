import { DashboardCard } from "../DashboardCard";
import { Profile } from "../Profile";

export default function DashboardUi() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                   {/* <DashboardCard/> */}
                   <Profile/>
                </div>
                <div className="w-full lg:w-8/12 px-4">
                   {/* <Profile/> */}
                   <DashboardCard/>
                </div>
            </div>

        </>
    )
}