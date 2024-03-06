// import React from 'react'

function MedicalEquipment() {
    return (
        <>
            <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0 z-0">
                <div className="text-center p-3">
                    <h1 className="font-bold text-2xl ">Medical Equipments</h1>
                    {/* <h1 className="text-3xl">Tailwind CSS</h1> */}
                </div>
                <section
                    className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10 items-start ">
                    <section className="p-5 py-10  text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <a title="Call us">
                            <img src="https://m.media-amazon.com/images/I/71HOS+lEu3L._AC_UF1000,1000_QL80_.jpg" alt="" style={{ width: '400px', height: '250px' }} />
                            <h1 className="text-xl my-8">Medical Bed</h1>
                            <div className="space-x-1 flex justify-center ">
                            <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="tel:+91 93117 91119">
                                    Enquire now
                                    <img src="/call.png" className="h-7 ml-1 mt-1" style={{filter: "brightness(0) invert(1)"}} alt="" />

                                </a>
                            </div>
                        </a>
                    </section>

                    <section className="p-5 py-10 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <a title="Call us">
                            <img src="https://healthdexter.com/cdn/shop/products/809b.jpg?v=1668089436" alt="Wheel chair" style={{ width: '400px', height: '250px' }} />
                            <h1 className="text-xl my-8">Wheel Chair</h1>
                            <div className="space-x-1 flex justify-center ">
                            <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="tel:+91 93117 91119">
                                    Enquire now
                                    <img src="/call.png" className="h-7 ml-1 mt-1" style={{filter: "brightness(0) invert(1)"}} alt="" />

                                </a>
                            </div>
                        </a>
                    </section>


                    <section className="p-5 py-10  text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <a title="Call us">
                            <img src="https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/morepenbp02-550x550.jpg" alt="" style={{ width: '400px', height: '250px' }} />
                            <h1 className="text-xl my-8">BP Instruments</h1>
                            <div className="space-x-1 flex justify-center">
                                <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="tel:+91 93117 91119">
                                    Enquire now
                                    <img src="/call.png" className="h-7 ml-1 mt-1" style={{filter: "brightness(0) invert(1)"}} alt="" />

                                </a>
                            </div>

                        </a>
                    </section>

                    <section className="p-5 py-10  text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <a title="Call us">
                            <img src="https://m.media-amazon.com/images/I/61VcQh6yNsS.jpg" alt="" style={{ width: '400px', height: '250px' }} />
                            <h1 className="text-xl my-8">Oxygen Concentration</h1>
                        </a>
                        <div className="space-x-1 flex justify-center ">
                        <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="tel:+91 93117 91119">
                                    Enquire now
                                    <img src="/call.png" className="h-7 ml-1 mt-1" style={{filter: "brightness(0) invert(1)"}} alt="" />

                                </a>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default MedicalEquipment