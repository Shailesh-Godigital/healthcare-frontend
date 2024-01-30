// import React from 'react'

function TestIntro() {
  return (
    <>
    <div className="flex flex-col sm:flex-row bg-cover bg-center" style={{ backgroundImage: "url('https://ichef.bbci.co.uk/news/976/cpsprodpb/99A9/production/_111473393_gettyimages-1019319774.jpg')" }}>
                {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
                {/* Content Section */}
              


                {/* Image Section */}
                <div className="p-6 relative sm:p-12 md:p-24 sm:w-1/2 ">
                    <div className="max-w-md mx-auto p-5 bg-white rounded-md shadow-md">
                        {/* <p className='text-center'>Book Consultation With Our Expert Doctors</p> */}
                        <h2 className="text-2xl font-semibold ">Book Your Test Now</h2>
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
                <div className="p-6 mt-10 relative sm:p-12 md:p-24 sm:w-1/2">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 sm:text-xl ">MYDR24 Blood Test CENTER</h1>
                    {/* <h2 className="text-xl">Embrace Freedom of Movement with the Power of Physio</h2> */}
                    <ul className="list-disc mb-4 m-4">
                        <li>Multiple sites for easy access and reduced travel time.</li>
                        <li>Swift processing ensures timely and efficient result delivery</li>
                        <li>Cutting-edge equipment for accurate and reliable blood analysis.</li>
                        <li>Skilled professionals providing expert assistance and compassionate care.</li>
                    </ul>
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Request a call back</button> */}
                </div>
            </div>
    </>
  )
}

export default TestIntro