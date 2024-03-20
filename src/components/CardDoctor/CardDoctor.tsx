import BookConsultationForm from '../BookConsultationForm/BookConsultationForm';
import { useState } from 'react';
function CardDoctor() {
    const Doctors = [
        {
            title: "Dr. Zara Ahmed",
            img: "DoctorImage3.jpeg",
            content:
                "MBBS (2016) DNB, EMERGENCY MEDICINE(JUNE 2020 SESSION), INDRAPRASTHA APOLLO HOSPITAL, DELHI ",
            price: "999"
        },
        {
            title: "Dr. Vipin Kumar",
            img: '/DoctorImage1.jpeg',
            content:
                "MBBS,DNB-EM (Apollo Hospital,New Delhi),MNAMS FACEE(AIIMS,NEW DELHI),FAGE CONSULTANT",
            price: "499"
        },
        {
            title: " Dr. Mohd Faizan",
            img: 'DoctorImage2.jpeg',
            content:
                "Degree: BPT (TMU), CCT, CDNT Physiotherapist, Place- Muscle stretch sports injuries and pain Clinic (Noida) ",
            price: "1499"
        },
        // {
        //   title: "React Tailwind Card with Grid 4",
        //   img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        //   content:
        //     "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
        // },
    ];

    const [isDialogOpen, setIsDialogOpen] = useState(false)


    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <div className="flex  flex-col sm:flex-row  ">
                {/* Content Section */}
                <div className=" sm:p-12 md:p-24 sm:w-full w-full">
                    {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Trust Accufly for Nursing Services</h1> */}
                    <div>
                        <p className="font-Proxima-Nova font-medium text-2xl md:text-3xl text-center ">
                            Top Doctors Available
                        </p>
                        {
                            Doctors.map((items) => (
                                <section className="container mx-auto p-5">
                                    <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-2xl group cursor-pointer transform duration-500 hover:-translate-y-1 w-full">
                                        <img className="w-full max-h-[250px] object-cover md:w-52" src={items.img} alt="" />
                                        <div className="">
                                            {/* Content for the first div */}
                                            <div className="ml-7">
                                                <h1 className="text-2xl font-semibold text-gray-800 mt-4">

                                                    {items.title}
                                                </h1>
                                                <p className="text-sm  mt-2 leading-relaxed">
                                                    {items.content}
                                                </p>
                                                {/* <p className="text-xsm leading-relaxed">
                                       15years of Experiance
                                        </p> */}
                                            </div>
                                            <div className=" p-2 ml-5">
                                                <div className="sm:flex sm:justify-between">
                                                    {/* <div>
                                                        <div className="text-lg text-gray-700">
                                                            <span className="text-gray-900 font-bold">Consultation fee </span>
                                                            <p> 	&#8377;{items.price}/-</p>
                                                        </div>

                                                    </div> */}
                                                    <button onClick={openDialog} className="mt-3 py-2 px-5 mt-9  md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                                        Book An Appointment
                                                    </button>
                                                </div>
                                                {/* <div className="mt-3 text-gray-600 text-sm md:text-sm">
                                            *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                                        </div> */}

                                            </div>
                                        </div>
                                    </article>
                                </section>
                            ))
                        }

                    </div>
                </div>

                {/* Image Section */}
                <div className="p-6 sm:p-12 md:p-24 sm:w-1/2 ">
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
                            <button onClick={openDialog} className=" py-2 px-5   md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                Book An Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {isDialogOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div
                                className="absolute inset-0 bg-gray-500 opacity-75"
                                onClick={closeDialog}
                            ></div>
                        </div>

                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <BookConsultationForm />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CardDoctor

