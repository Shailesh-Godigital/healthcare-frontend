// import React from 'react'

function IntroDiagnostic() {

    return (
        <>

            <div className="flex flex-col sm:flex-row  bg-cover bg-center" style={{ backgroundImage: "url('/Diagnostic1.jpg')" }}>
                {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
                {/* Content Section */}
                <div className="p-6 mt-10  relative sm:p-12 md:p-24 sm:w-1/2 md:ml-8 ml-8 text-white">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 sm:text-xl">MYDR24 Diagnostic Center</h1>
                    <h2 className="text-xl font-bold">Embrace Freedom of Movement with the Power of Physio</h2>
                    <ul className="list-disc mb-4 m-4 text-xl">
                        <li>Advanced Imaging Technologies for Accurate Diagnoses.</li>
                        <li>Rapid Turnaround Time for Test Results.</li>
                        <li>Experienced and Specialized Medical Professionals.</li>
                        <li>Convenient Online Appointment Scheduling.</li>
                    </ul>
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Request a call back</button> */}
                </div>


                {/* Image Section */}
                <div className="p-6 relative sm:p-12 md:p-24 sm:w-1/2 ">
                    <div className="max-w-md mx-auto p-5 bg-white rounded-md shadow-md">
                        {/* <p className='text-center'>Book Consultation With Our Expert Doctors</p> */}
                        <h2 className="text-2xl font-semibold ">Book Free Appointment</h2>
                        <p>Get instant CallBack in Few Minutes  </p>
                        <form action="#" method="POST" className='mt-5'>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                                <input type="text" id="name" name="name" placeholder=" Your Name" required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Your Phone</label>
                                <input type="Phone" id="Phone" name="Phone" placeholder="Phone" required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            {/* <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                                <textarea id="message" name="message"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            </div> */}
                            <button className=" py-2 px-5   md:py-3 md:px-6 bg-blue-700 hover:bg-blue-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                Book An Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="px-2 py-20 w-full flex justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                            style={{ backgroundImage: "url('https://luciddiagnostics.com/wp-content/uploads/2023/07/health-checkup-img.jpg')" }}>
                        </div>
                    </div>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl text-gray-800 font-bold">
                            Who Needs
                            These
                            <span className="text-indigo-600"> Packages?</span>
                        </h2>
                        <p className="mt-4 text-gray-600">

                            Individuals seeking to monitor and optimize their health benefit from diagnostic packages for personal use. These packages provide valuable insights into various health metrics, enabling proactive health management. With convenient at-home testing options, individuals can track key indicators, detect potential issues early, and make informed decisions to promote overall well-being.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



export default IntroDiagnostic

