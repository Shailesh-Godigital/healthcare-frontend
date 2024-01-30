// import React from 'react'

function IntroSurgeyPlanning() {

    return (
        <>

            <div className="flex flex-col sm:flex-row bg-cover bg-center" style={{ backgroundImage: "url('https://www.southgatephysio.co.uk/wp-content/uploads/bfi_thumb/Picture15-3g8p82wn9hzfiiucqgdkay.jpg')" }}>
                {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
                {/* Content Section */}
                <div className="p-6 relative sm:p-12 md:p-24 sm:w-1/2 ml-8">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 sm:text-xl">MYDR24 PHYSIOTHERAPIST CENTER</h1>
                    <h2 className="text-xl">Embrace Freedom of Movement with the Power of Physio</h2>
                    <ul className="list-disc mb-4 m-4">
                        <li>1000+ experienced nurses</li>
                        <li>100% court & criminal verified</li>
                        <li>Minimum 5 yrs Hospital & Critical care experience</li>
                        <li>Trained to provide emotional support & patient education</li>
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
        </>
    )
}



export default IntroSurgeyPlanning

