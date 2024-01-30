// import React from 'react'

function DiagnosticPackage() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="bg-gray-200 mx-auto mt-8 max-w-3xl rounded-2xl ring-1 ring-gray-200 sm:mt-12 lg:mx-30 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Heart</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Track your vitals regularly to avoid heart
                            health-related complications well in time.
                            {/* <a href="/contact"
                                className="text-blue-500 underline underline-offset-4">Just email us here!</a> */}
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Included Below tests and more.</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Blood tests</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Electrocardiogram (ECG)</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Magnetic resonance imaging (MRI)</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Echocardiogram (ultrasound)</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Nuclear cardiac stress test</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Coronary angiogram</span></li>

                        </ul>
                    </div>
                    <div className="w-full mt-12 sm:w-1/2 lg:w-1/4 p-3">

                        <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
                            <header className="text-center leading-tight pt-10 pb-6">
                                {/* <h2 className="uppercase tracking-wide text-sm font-bold text-gray-700">Private Instruction</h2> */}
                                <p className="text-gray-500">starting at</p>
                                <div className="text-5xl text-gray-900 font-bold tracking-tight">
                                    <span className="inline-block align-top pt-2 text-lg">  </span>
                                    <span className="-ml-2">&#8377; 3999</span>
                                </div>

                            </header>
                            <div className="flex flex-col p-6 border-t border-gray-300 bg-gray-100">
                                <a href="#" className="block mt-6 text-center text-white bg-indigo-500 hover:bg-indigo-600 py-2 rounded-full">Book Plan</a>
                            </div>
                        </div>

                    </div>
                    <img className="w-3/5 md:w-1/2 max-h-[250px] mt-0 md:mt-12 p-5 ml-5 md:w-60 object-cover mx-auto flex items-center justify-center rounded-full" src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2289495.jpg" alt="" />

                </div>

            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="bg-gray-200 mx-auto mt-8 max-w-3xl rounded-2xl ring-1 ring-gray-200 sm:mt-12 lg:mx-30 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Diabetes</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Keep a tab on your blood glucose levels for
                            better diabetes control & to prevent
                            comorbidities
                            {/* <a href="/contact"
                                className="text-blue-500 underline underline-offset-4">Just email us here!</a> */}
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Included Below tests and more.</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Fasting Blood Sugar Test</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">HbA1C</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">A Complete Blood Count (CBC)</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Post Prandial Glucose Test (PPBS):</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Insulin Auto Antibodies (IAA)</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Creatinine Blood Test:</span></li>

                        </ul>
                    </div>
                    <div className="w-full mt-12 sm:w-1/2 lg:w-1/4 p-3">

                        <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
                            <header className="text-center leading-tight pt-10 pb-6">
                                {/* <h2 className="uppercase tracking-wide text-sm font-bold text-gray-700">Private Instruction</h2> */}
                                <p className="text-gray-500">starting at</p>
                                <div className="text-5xl text-gray-900 font-bold tracking-tight">
                                    <span className="inline-block align-top pt-2 text-lg">  </span>
                                    <span className="-ml-2"> &#8377;  999</span>
                                </div>

                            </header>
                            <div className="flex flex-col p-6 border-t border-gray-300 bg-gray-100">
                                <a href="#" className="block mt-6 text-center text-white bg-indigo-500 hover:bg-indigo-600 py-2 rounded-full">Book Plan</a>
                            </div>
                        </div>

                    </div>
                    <img className="w-3/5 md:w-1/2 max-h-[250px] mt-0 md:mt-12 p-5 ml-5 md:w-60 object-cover mx-auto flex items-center justify-center rounded-full" src="https://assets.telegraphindia.com/telegraph/5e5b81e5-e60f-42d9-8f3f-d2e5f1a691e1.jpg" alt="" />

                </div>

            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="bg-gray-200 mx-auto mt-8 max-w-3xl rounded-2xl ring-1 ring-gray-200 sm:mt-12 lg:mx-30 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Full Body
                            Checkup</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Keep an eye on your kidney, liver, thyroid and
                            heart function to know whether your lifestyle
                            is healthy for your body.
                            {/* <a href="/contact"
                                className="text-blue-500 underline underline-offset-4">Just email us here!</a> */}
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Included Below tests and more.</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Blood Pressure Test</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Cholesterol Test</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Blood Sugar Test</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Urinalysis</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Chest X-Ray</span></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"
                                id="IconChangeColor">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                                            clip-rule="nonzero" id="mainIconPathAttribute" fill="green"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="green"
                                        d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                                        fill-opacity="1" fill-rule="nonzero" id="mainIconPathAttribute"></path>
                                </g>
                            </svg> <span className="font-bold mx-1">Lung Function Tests</span></li>

                        </ul>
                    </div>
                    <div className="w-full mt-12 sm:w-1/2 lg:w-1/4 p-3">

                        <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
                            <header className="text-center leading-tight pt-10 pb-6">
                                {/* <h2 className="uppercase tracking-wide text-sm font-bold text-gray-700">Private Instruction</h2> */}
                                <p className="text-gray-500">starting at</p>
                                <div className="text-5xl text-gray-900 font-bold tracking-tight">
                                    <span className="inline-block align-top pt-2 text-lg">  </span>
                                    <span className="-ml-2">&#8377; 2499</span>
                                </div>

                            </header>
                            <div className="flex flex-col p-6 border-t border-gray-300 bg-gray-100">
                                <a href="#" className="block mt-6 text-center text-white bg-indigo-500 hover:bg-indigo-600 py-2 rounded-full">Book Plan</a>
                            </div>
                        </div>

                    </div>
                    <img className="w-3/5 md:w-1/2 max-h-[250px] mt-0 md:mt-12 p-5 ml-5 md:w-60 object-cover mx-auto flex items-center justify-center rounded-full" src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2Fc007bbf9-1981-48fd-9bcf-7ef7a9e1e8e3.jpg&w=1080&q=75" alt="" />

                </div>

            </div>



        </>
    )
}

export default DiagnosticPackage