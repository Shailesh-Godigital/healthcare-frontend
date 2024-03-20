// import React from 'react'

function BookConsultationForm() {
    return (
        <>
            {/* <div className=" sm:p-12 md:p-24 sm:w-1/2 "> */}
                <div className="max-w-md mx-auto p-5 bg-white rounded-md shadow-md">
                    {/* <p className='text-center'>Book Consultation With Our Expert Doctors</p> */}
                    <h2 className="text-2xl font-semibold ">Book Consultation With Our Expert Doctors !!</h2>
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
                        <button className=" py-2 px-5   md:py-3 md:px-6 bg-indigo-900 hover:bg-indigo-900 font-bold text-white md:text-lg rounded-lg shadow-md">
                            Book An Appointment
                        </button>
                    </form>
                </div>
            {/* </div> */}
        </>
    )
}

export default BookConsultationForm