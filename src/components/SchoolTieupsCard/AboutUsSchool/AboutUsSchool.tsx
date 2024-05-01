import React from 'react'
import img1 from '../../../../public/4 (2).jpg'


export default function AboutUsSchool() {
    return (
        <>
            <section className="bg-gray" style={{ backgroundColor: '#0067BC' }}>
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                        <div className="max-w-lg ml-6">
                            <h2 className="text-6xl text-white sm:text-7xl">
                                About
                            </h2>
                            {/* <br /> */}
                            <h2 className="text-6xl text-white sm:text-7xl mt-2">
                                <span className="mb-10">MyDr24</span>
                            </h2>
                            <h2 className="text-6xl text-white sm:text-7xl mt-3">
                           
                                Schools
                            </h2>


                            <p className="md:mt-20 sm:mt-20 text-white  text-xl sm:text-xl">
                                Transform your school into a safe haven for health with fully equipped medical rooms and expert nursing staff.
                            </p>

                        </div>
                        <div className="max-w-screen-lg mx-auto  sm:p-10 md:p-1">

                            <div className=" rounded overflow-hidden flex flex-col mx-auto">
                                <div className="relative w-50 md:ml-20">
                                    <a >
                                        <img className="w-100%"
                                            src={img1}
                                            alt="Sunset in the mountains" />
                                    </a>


                                </div>
                                <p className="text-white py-5 text-base leading-8">
                                    As a school administrator, you shoulder immense responsibility. You create learning environments, foster growth, and above all, safeguard your students. But what happens when a scraped knee turns serious, an asthma attack flares up, or a student feels faint mid-class? Are you truly equipped to handle the unexpected health needs that arise within your school walls?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
