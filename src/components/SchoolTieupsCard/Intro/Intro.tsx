import React from 'react'
import img1 from '../../../../public/8 (1) .jpg'
import img2 from '../../../../public/9 (1).jpg'
import img3 from '../../../../public/10 (1).jpg'

export default function Intro() {
    return (
        <>
            <section className="">
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                        <div className="text-center lg:text-left">
                            <p className="mt-4 max-w-xl text-2xl text-blue-700 mx-auto lg:max-w-7xl lg:mx-auto">
                                Let's face it: accidents happen. From playground scrapes to sudden illnesses, every school day holds the potential for unforeseen medical situations. Without a dedicated medical room, you risk:
                            </p>
                        </div>
                        <div className="container max-w-xl mt-5 p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl text-blue-700 hidden lg:block">

                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <div className="mt-4 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center  m-10 rounded-md text-5xl">
                                                    <h2>01</h2>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-3xl font-medium leadi ">Untrained staff scrambling to assess injuries</h4>
                                                <p className="mt-2 text-xl">We transform unused spaces into fully-equipped medical rooms. From essential first-aid supplies and over-the-counter medications to specialized equipment, we ensure your school is prepared for any minor health incident.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center  m-10 rounded-md text-5xl">
                                                    <h2>02</h2>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-3xl font-medium leadi ">Delays in vital first aid that could worsen conditions</h4>
                                                <p className="mt-2 text-xl">Our trained nurses provide immediate,compassionate care,putting worried young minds(and yours!) at ease</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="mt-10 lg:mt-0">
                                    <img width="600" height="600" src="https://www.mayflower-christian-academy.at/fileadmin/user_upload/pictures/GettyImages-536907301.jpg" className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" />
                                </div>
                            </div>
                        </div>

                        <div className="container max-w-xl mt-5 p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl text-blue-700 lg:hidden">

                            <div className="space-y-12">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-center m-4 rounded-md text-3xl font-medium leading-none">
                                        <h2>01</h2>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-2xl font-medium leading-tight">Untrained staff scrambling to assess injuries</h4>
                                        <p className="mt-2 text-lg">We transform unused spaces into fully-equipped medical rooms. From essential first-aid supplies and over-the-counter medications to specialized equipment, we ensure your school is prepared for any minor health incident.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-center m-4 rounded-md text-3xl font-medium leading-none">
                                        <h2>02</h2>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-2xl font-medium leading-tight">Delays in vital first aid that could worsen conditions</h4>
                                        <p className="mt-2 text-lg">Our trained nurses provide immediate, compassionate care, putting worried young minds (and yours!) at ease.</p>
                                    </div>
                                </div>
                            </div>

                            <img src="https://www.mayflower-christian-academy.at/fileadmin/user_upload/pictures/GettyImages-536907301.jpg" className="mx-auto mt-8 rounded-lg shadow-lg dark-bg-gray-500" alt="Image" width="300" height="300" />

                        </div>





                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-row-4 lg:grid-cols-3 gap-8 p-20">

                <div className="group cursor-pointer relative">
                    <img
                        src={img1}
                        alt="Image 1"
                        className="w-full h-98 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src={img2}
                        alt="Image 1"
                        className="w-full h-98 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src={img3}
                        alt="Image 1"
                        className="w-full h-25 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                </div>
                

            </div>

        </>
    )
}
