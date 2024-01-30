// import React from 'react';

import imgUrl from "../../../public/logo.jpg";
export default function Profile() {
    return (
        <>
            <div className="relative dark:bg-[#101929] flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-2 flex justify-center">
                            <img
                                alt="..."
                                // src={require("../../../public/logo.jpg").default}
                                src={imgUrl}
                                className="shadow-xl mt-1 rounded-half h-20 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-100-px"
                            />
                        </div>

                        <div className="w-full px-4 text-center mt-20">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                           MYDR24
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                            Noida, India
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            Solution Manager
                        </div>
                        <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                         
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
