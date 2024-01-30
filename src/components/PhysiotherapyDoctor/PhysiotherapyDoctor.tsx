// import React from 'react'

function PhysiotherapyDoctor() {
    const Doctors = [
        {
            title: "Dr. Khyati Bagga",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Smiley_Doctor.jpg/1280px-Smiley_Doctor.jpg",
            content:
                "Experienced General Surgeon in Ajmeri-Gate, Azad-Nagar, Bengali-Market, Central-Secretariat, Chanakya-Puri, Connaught-Place, Daya-Basti, Delhi-Heart-Institute, Delhi.",
            price: "499"
        },
        {
            title: "Dr. Deepali Bhardwaj",
            img: "https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-260nw-1613858044.jpg",
            content:
                "MBBS, DVDL, MD (USA.IM), FACSI, FIADVL, Fellow Cutaneous Allergies, Munich, Germany, Fellow Cutaneous Surgeries & Laser , Tehran, Iran",
            price: "1499"
        },
        {
            title: "Dr. Satish Kumar",
            img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content:
                "Experienced General Surgeon in Ajmeri-Gate, Azad-Nagar, Bengali-Market, Central-Secretariat, Chanakya-Puri, Connaught-Place, Daya-Basti, Delhi-Heart-Institute, Delhi.",
            price: "999"
        },
        // {
        //   title: "React Tailwind Card with Grid 4",
        //   img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        //   content:
        //     "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
        // },
    ];
    return (
        <>
            <div className="p-10 m-4  flex-col sm:flex-row  item-center ">
                {/* Content Section */}

                {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Trust Accufly for Nursing Services</h1> */}
                <div>
                    {/* <p className="font-Proxima-Nova border-b-4 font-medium bold-dark text-2xl md:text-3xl text-center">
                        PLANT YOUR TREATMENT WITH OUR PHYSIOTHERAPIST
                        </p> */}
                    <h1 className="font-Proxima-Nova text-center font-medium text-2xl md:text-3xl border-b-1 border-blue-600">
                        PLANT YOUR TREATMENT WITH OUR PHYSIOTHERAPIST
                    </h1>
                    {
                        Doctors.map((items, index) => (
                            <section key={index} className="container mx-auto p-5">
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
                                            {/* <div className="sm:flex sm:justify-between">
                                                    <div>
                                                        <div className="text-lg text-gray-700">
                                                            <span className="text-gray-900 font-bold">Consultation fee </span>
                                                            <p> 	&#8377;{items.price}/-</p>
                                                        </div>

                                                    </div>
                                                    <button className="mt-3 py-2 px-5 mt-9  md:py-3 md:px-6 bg-blue-700 hover:bg-blue-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                                        Book An Appointment
                                                    </button>
                                                </div> */}
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


        </>
    )
}

export default PhysiotherapyDoctor

