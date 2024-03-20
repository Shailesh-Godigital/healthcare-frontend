// import React from 'react'
// import img1 from '../../../public/testBanner.jpg';

import { useState, useEffect } from "react";

function TestIntro({ dataPackage }: { dataPackage: any }) {
    const [description, setDescription] = useState("")

    useEffect(() => {
        // Update description only if it's not already set
        if (!description && dataPackage.description) {
            setDescription(dataPackage.description);
        }
    }, [description, dataPackage.description]);

    const { price, discount } = dataPackage;

    // Calculating selling price after discount
    let sellingPrice = price * (1 - discount / 100);

    // Rounding selling price to the nearest whole amount
    const decimalPart = sellingPrice % 1;
    if (decimalPart >= 0 && decimalPart < 0.5) {
        sellingPrice = Math.floor(sellingPrice);
    } else {
        sellingPrice = Math.ceil(sellingPrice);
    }

    let dis = description.split(",")

    const schema = dis.reduce((acc: any, part, index) => {
        acc[`${index + 1}`] = part.trim();
        return acc;
    }, {});
    console.log(schema);

    // console.log("Selling price:", sellingPrice);

    return (
        <>
            <section className="text-white p-3 md:ml-20 md:mr-20 body-font text-center flex justify-center bg-cover bg-center rounded-md bg-neutral-400" style={{ backgroundImage: "url('https://wallpapers.com/images/hd/healthcare-background-8u6l9oyzn67dtdas.jpg')" }}>
                <div className="container md:m-10 mx-auto flex px-5 md:flex-row flex-col items-center justify-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text sm:text-4xl text-3xl mb-4 font-medium text-white-900">
                            {dataPackage.subTitle} &nbsp;
                            {/* <span>{dataPackage.title}</span> */}
                            <br className="hidden lg:inline-block" /> Near you in Delhi
                        </h1>
                        <p className="mb-8 leading-relaxed">Thousand+ scans done & counting.. </p>
                        {/* <p className="mb-8 mt-2">{dataPackage.description}</p> */}
                        <p className="mb- leading-relaxed">Starting only @ </p>
                        <div className="flex items-center">
                            <p className="leading-relaxed text-3xl">&#8377;{sellingPrice}</p>
                            {/* <p >&nbsp; &nbsp; <span className=" text-xl line-through">&#8377;{dataPackage.price}</span></p>
                            <p >&nbsp; &nbsp; <span className=" text-xl ">upto {dataPackage.discount}% discount</span></p> */}

                        </div>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 md:ml-20 w-5/6">
                        {/* <img className="object-cover object-center rounded" alt="hero" src={img1} /> */}
                    </div>
                </div>
            </section>
            {/* <p className="m-10 p-3 ">{dataPackage.description}</p> */}

            <div className="lg:ml-6 lg:col-start-2 md:ml-20 lg:max-w-2xl mt-5 md:mb-2 p-4  justify-center " >
                <p className="text-base font-bold leading-6 text-xl ml-10 mb-5 text-indigo-950  ">
                    Test Included in {dataPackage.subTitle}
                </p>
                <ul className="mt-2 space-y-3 font-medium ml-10">

                    {Object.entries(schema).map(([key, value]) => (
                        <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-800" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p className="ml-3 leading-5 text-gray-800">
                                <div key={key}>
                                    <strong>{key}:</strong> {String(value)}
                                </div>
                            </p>
                        </li>
                          ))}
                </ul>
            </div>

            <h1 className="font-Proxima-Nova md:mt-10 md:ml-20 md:mb-2 p-4 sm:p-0 font-medium text-xl md:text-2xl pb-4 flex justify-left">
                Available Lab List in Delhi
            </h1>

            {/* <blockquote className="relative ml-20 bg-white mb-2 p-3 border border-gray-400 m-1" style={{ width: "60%", border: "2px solid #4a90e2", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h2 className="text-lg ml-10">
                    Pixel Diagnostics & Interventions,Gurugram</h2>
                <div className="mt-1 flex items-start gap-4">
                    <div className="text-sm">
                        <p className="text-gray-700 ml-10">House No 24, Sector-14, Near Gate - 5 Gurugram,122001<a href="" target="_blank" className="text-red-500"></a></p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 flex flex-row items-end justify-start m-5 pr-5">
                    <div className="flex justify-left rounded-md">
                        <div className="text-left py-1 px-3 rounded-md text-2xl">
                            &#8377;299
                        </div>
                    </div>
                    <button className="bg-blue-900 ml-4 text-white py-2 px-4 rounded-md">Book  Appointment</button>
                </div>
            </blockquote> */}


            <div className="hidden lg:block">
                <blockquote className="relative ml-20 bg-white mb-2 p-3 border border-gray-400 m-1" style={{ width: "60%", border: "2px solid #4a90e2", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h2 className="text-lg ml-10">
                        Pixel Diagnostics & Interventions,delhi</h2>
                    <div className="mt-1 flex items-start gap-4">
                        <div className="text-sm">
                            <p className="text-gray-700 ml-10">House No 24, Sector-14, Near Gate - 5 delhi,122001<a href="" target="_blank" className="text-red-900"></a></p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 flex flex-row items-end justify-start m-5 pr-5">
                        <div className="flex justify-left rounded-md">
                            <div className="text-left py-1 px-3 rounded-md text-2xl">
                                &#8377;299
                            </div>
                        </div>
                        <button className="bg-blue-900 ml-4 text-white py-2 px-4 rounded-md">Book  Appointment</button>
                    </div>
                </blockquote>
                <blockquote className="relative ml-20 bg-white mb-2 p-3 border border-gray-400 m-1" style={{ width: "60%", border: "2px solid #4a90e2", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h2 className="text-lg ml-10">
                        Pixel Diagnostics & Interventions,delhi</h2>
                    <div className="mt-1 flex items-start gap-4">
                        <div className="text-sm">
                            <p className="text-gray-700 ml-10">House No 24, Sector-14, Near Gate - 5 delhi,122001<a href="" target="_blank" className="text-red-900"></a></p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 flex flex-row items-end justify-start m-5 pr-5">
                        <div className="flex justify-left rounded-md">
                            <div className="text-left py-1 px-3 rounded-md text-2xl">
                                &#8377;299
                            </div>
                        </div>
                        <button className="bg-blue-900 ml-4 text-white py-2 px-4 rounded-md">Book  Appointment</button>
                    </div>
                </blockquote>
            </div>

            <div className="block lg:hidden">
                <blockquote className="relative bg-white mb-2 p-3 border border-gray-400 m-4" style={{ width: "90%", border: "2px solid #4a90e2", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h2 className="text-lg">
                        Pixel Diagnostics & Interventions,Gurugram
                    </h2>
                    <div className="flex flex-col items-start gap-4">
                        <div className="text-sm">
                            <p className="text-gray-700">House No 24, Sector-14, Near Gate - 5 Gurugram,122001<a href="" target="_blank" className="text-red-900"></a></p>
                        </div>
                        <div className="flex justify-left items-center mt-2">
                            <div className="text-left py-1 px-3 rounded-md text-2xl">
                                &#8377;299
                            </div>
                            <button className="bg-blue-900 ml-4 text-white py-2 px-4 rounded-md">Book Appointment</button>
                        </div>
                    </div>
                </blockquote>
            </div>


        </>
    )
}

export default TestIntro