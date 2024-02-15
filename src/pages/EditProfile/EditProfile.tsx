import {
    Header,
    Footer,

} from "@/components";
// import { useState } from 'react';
import { Sidebar } from "@/components/Sidebar";
import EditProfileForm from "@/components/EditProfileForm/EditProfile";


const EditProfile = () => {


    return (
        <div>
            <Header />
            <div className="flex flex-wrap mt-4">
                <div className="w-full  pl-20 lg:w-3/12">
                    <Sidebar />
                </div>
                <div className="w-full lg:w-8/12 px-4">
                    <EditProfileForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EditProfile;