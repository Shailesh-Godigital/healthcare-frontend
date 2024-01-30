// import React from 'react'

function IntroSurgeyPlanning() {

    return (
        <>
            <div id="features" className="mx-auto max-w-6xl">
                {/* <h2 className="text-center font-display text-3xl tracking-tight text-slate-900 md:text-4xl mb-8">
                    Surgery by MyDr24: Transformative Healthcare Solutions
                </h2> */}
                <h1 className="lg:text-5xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">Surgery by MyDr24  
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">Transformative Healthcare Solutions</span>
                </h1>
                <ul className="grid grid-cols-1 gap-8 mt-2 text-center text-slate-700 md:grid-cols-3">
                    <li className="rounded-xl bg-white px-6 py-8 shadow-md transition duration-300 transform hover:scale-105">
                        <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10 mb-4" />
                        <h3 className="my-3 font-display font-medium text-primary-500">Expert Surgeons On-Demand</h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Access a network of highly skilled and experienced surgeons at your convenience.
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Receive expert consultations and second opinions for informed decision-making.
                        </p>
                    </li>
                    <li className="rounded-xl bg-white px-6 py-8 shadow-md transition duration-300 transform hover:scale-105">

                        <img src="https://www.svgrepo.com/show/530442/port-detection.svg"
                            alt="" className="mx-auto h-10 w-10" />
                        <h3 className="my-3 font-display font-medium">Tailored Treatment Plans:</h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Personalized surgical treatment plans designed to meet the unique needs of each patient.
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Integration of the latest medical research and advancements for evidence-based decision-making.
                        </p>

                    </li>
                    <li className="rounded-xl bg-white px-6 py-8 shadow-md transition duration-300 transform hover:scale-105">
                        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" className="mx-auto h-10 w-10" />
                        <h3 className="my-3 font-display font-medium">Virtual Surgical Simulations:</h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Experience virtual simulations of surgical procedures for a better understanding of the process.
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Enhance patient education and involvement in the decision-making process.
                        </p>

                    </li>
                    <li className="rounded-xl bg-white px-6 py-8 shadow-md transition duration-300 transform hover:scale-105">
                        <a href="/pricing" className="group">
                            <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" />
                            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Real-time Telemedicine Consultations:</h3>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
                                Seamless video consultations with surgeons for pre- and post-operative discussions.</p>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">Access medical advice and guidance from the comfort of your home.
                            </p>
                        </a>
                    </li>
                    <li className="rounded-xl bg-white px-6 py-8 shadow-md transition duration-300 transform hover:scale-105">
                        <a href="/templates" className="group">
                            <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" className="mx-auto h-10 w-10" />
                            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                                Collaborative Care Team Platform:
                            </h3>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                Facilitate communication and collaboration among surgeons, nurses, and other healthcare professionals. </p>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                Ensure a streamlined and coordinated approach to patient care.</p>
                        </a>
                    </li>
                    <li className="rounded-xl bg-white px-6 py-8 shadow-md transition duration-300 transform hover:scale-105">
                        <a href="/download" className="group">
                            <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10" />
                            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Transparent Cost Estimates:</h3>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">Receive clear and transparent cost estimates for surgical procedures.</p>
                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">Understand financial aspects and make informed decisions regarding your healthcare.</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default IntroSurgeyPlanning

