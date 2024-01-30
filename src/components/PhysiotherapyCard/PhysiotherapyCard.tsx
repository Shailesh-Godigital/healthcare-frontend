// import React from 'react'
import doctor from '../../../public/doctorC.svg';
import mask from '../../../public/mask.png'
import award from '../../../public/award.png'

function PhysiotherapyCard() {
    return (
        <div className=" mt-20 mb-20 container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
                {/* <div className=" rounded-full border-8 border-amber-400 p-4 "> */}
                <img src={doctor} alt="Doctor Consultation" className="max-w-full h-20 mb-1" />
                {/* </div> */}
                <h3 className="text-xl ">15+ Years Experieced Doctors</h3>
                {/* <p>Our products are secure and private out-of-the-box</p> */}
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
                <img src={mask} alt="Doctor Consultation" className="max-w-full h-20 mb-1" />
                <h3 className="text-xl ">50,000+ Happy Customers</h3>
                {/* <p>Feel good about your wallet and the environment</p> */}
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
                <img src={award} alt="Doctor Consultation" className="max-w-full h-20 mb-1" />
                <h3 className="text-xl ">15+ Awards Credited</h3>
                {/* <p>Leading the Smart Home world for 10 years</p> */}
            </div>
        </div>
    )
}

export default PhysiotherapyCard