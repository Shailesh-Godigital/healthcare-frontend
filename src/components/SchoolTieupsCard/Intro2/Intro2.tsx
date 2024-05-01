import React from 'react'
import img1 from '../../../../public/11.jpg'
import img2 from '../../../../public/12.jpg'
import img3 from '../../../../public/13.jpg'
import img4 from '../../../../public/5 (1).jpg'
import video1 from '../../../../public/Videos/MyDr24 (9).mp4'
export default function Intro2() {
    return (
        <>
            <section className=" mx-auto py-10  dark:text-white">
                <h2 className="text-3xl lg:text-5xl  text-center  mb-12 mt-10 " style={{ color: '#0865AD' }}>
                    Managing Chronic Conditions
                </h2>
                <div className="xl:w-[100%] sm:w-[85%] m-4 p-4 xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-10 xs:gap-2 justify-center items-center mt-6">
                    <div className="lg:w-[60%] xs:w-full p-4 xs:p-0 rounded-lg border border-black">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Students with asthma, diabetes, allergies, and other chronic conditions require ongoing support. Without a well-equipped medical room and skilled staff, you're left with:</h2>
                        <ul className="mt-8 list-disc ml-5">
                            <li>The burden of medication administration falling on unqualified personnel</li>
                            <li>Anxiety for students who don't feel safe or understood</li>
                            <li>Potential emergencies that disrupt the entire school day</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] xs:w-full mt-6 md:mt-0">
                        <img className="rounded-lg" src={img1} alt="billboard image" />
                    </div>
                </div>

                <div className="xl:w-[100%] sm:w-[85%] m-4 p-4 xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-10 xs:gap-2 justify-center items-center mt-6">
                    <div className="lg:w-[60%] xs:w-full p-4 xs:p-0 rounded-lg border border-black">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">The MyDR24 Solution</h2>
                        <ul className="mt-8 list-disc ml-5">
                            <li>Our experienced nurses are your partners in managing chronic conditions. They administer medications, monitor symptoms, and train staff on emergency protocols. Students feel secure knowing their health needs are met, promoting a truly inclusive environment.</li>

                        </ul>
                    </div>
                    <div className="lg:w-[20%] xs:w-full mt-6 md:mt-0">
                        <img className="rounded-lg" src={img2} alt="billboard image" />
                    </div>
                </div>

            </section>
            <div className="flex justify-center items-center">
                <video
                    src={video1}
                    autoPlay
                    loop
                    muted
                    style={{ width: "900px", height: "500px" }}
                    className="object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                ></video>
            </div>



            <div className="grid gap-4 p-4 lg:grid-cols-2 lg:items-center mt-20">
                <div className="lg:text-center">
                    <img width="600" height="600" src={img3} className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" />
                </div>
                <div className="lg:text-center">
                    <img width="600" height="600" src={img4} />
                </div>
            </div>






        </>
    )
}
