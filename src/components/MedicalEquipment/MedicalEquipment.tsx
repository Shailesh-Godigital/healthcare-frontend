// import React from 'react'
// const props.scrollToBottom = () => {
//     window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth' // Scroll behavior
//     });
// };

function MedicalEquipment(props: any) {
    return (
        <>
            <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0 z-0">
                <div className="text-center p-3">
                    <h1 className="font-bold text-2xl m-4">Medical Equipments</h1>
                    {/* <h1 className="text-3xl">Tailwind CSS</h1> */}
                </div>
                <section
                    className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10 items-start z-0">
                    <section className="p-5 py-10 text-center transform duration-500 hover:-translate-y-2 cursor-pointer border border-gray-200 border-opacity-100 rounded-lg">
                        <div className="relative">
                            <img src="https://m.media-amazon.com/images/I/71HOS+lEu3L._AC_UF1000,1000_QL80_.jpg" alt="" className="w-full h-auto object-scale-down z-0 opacity: 0;" />

                        </div>

                        <h1 className="text-xl my-2">Medical Bed </h1>
                        <p className="text-sm text-gray-600 mb-2">Comfort and care converge with our medical bed for ultimate patient support.</p>
                        <p className="text-sm text-gray-600 my-2">Up to 30% Discount</p>
                        <div className="space-x-2 mt-3 flex justify-center">
                            <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/65 transition-transform duration-200 ease-in-out hover:scale-[1.02]" onClick={props.scrollToBottom} target="_blank">
                                Book  Now
                                {/* <img src="/call.png" className="h-7 ml-1 mt-1" style={{ filter: "brightness(0) invert(1)" }} alt="" /> */}
                            </a>
                            <a className="inline-flex items-center justify-center rounded-xl  bg-green-600 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-green-400/55 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="https://api.whatsapp.com/send?phone=+91 93117 91119&text=Hello%20send%20me%20Quotation!" target="_blank">

                                <img src="/whatsapp.png" className="h-7 " alt="" />
                            </a>
                        </div>

                    </section>


                    <section className="p-5 py-10 text-center transform duration-500 hover:-translate-y-2 cursor-pointer border border-gray-200 border-opacity-100 rounded-lg">

                        <img src="https://healthdexter.com/cdn/shop/products/809b.jpg?v=1668089436" alt="Wheel chair" style={{ width: '400px', height: '250px' }} />
                        {/* <h1 className="text-xl my-8">Wheel Chair</h1> */}
                        <h1 className="text-xl my-2">Wheel Chair </h1>

                        <p className="text-sm text-gray-600 mb-2">Offering mobility  with our high-quality wheelchairs tailored to meet your needs.</p>
                        <p className="text-sm text-gray-600 my-2">Up to 30% Discount</p>

                        <div className="space-x-2 mt-3 flex justify-center">
                            <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/65 transition-transform duration-200 ease-in-out hover:scale-[1.02]" onClick={props.scrollToBottom} target="_blank">
                                Book  Now
                                {/* <img src="/call.png" className="h-7 ml-1 mt-1" style={{ filter: "brightness(0) invert(1)" }} alt="" /> */}
                            </a>
                            <a className="inline-flex items-center justify-center rounded-xl  bg-green-600 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-green-400/55 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="https://api.whatsapp.com/send?phone=+91 93117 91119&text=Hello%20send%20me%20Quotation!" target="_blank">

                                <img src="/whatsapp.png" className="h-7 " alt="" />
                            </a>
                        </div>

                    </section>


                    <section className="p-5 py-10  text-center transform duration-500 hover:-translate-y-2 cursor-pointer border border-gray-200 border-opacity-100 rounded-lg">

                        <img src="https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/morepenbp02-550x550.jpg" alt="" style={{ width: '400px', height: '250px' }} />
                        <h1 className="text-xl my-2">BP Instruments</h1>
                        <p className="text-sm text-gray-600 mb-2"> "Accurate and reliable blood pressure monitoring devices for  professionals."</p>
                        <p className="text-sm text-gray-600 my-2">Up to 30% Discount</p>

                        <div className="space-x-2 mt-3 flex justify-center">
                            <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/65 transition-transform duration-200 ease-in-out hover:scale-[1.02]" onClick={props.scrollToBottom} target="_blank">
                                Book  Now
                                {/* <img src="/call.png" className="h-7 ml-1 mt-1" style={{ filter: "brightness(0) invert(1)" }} alt="" /> */}
                            </a>
                            <a className="inline-flex items-center justify-center rounded-xl  bg-green-600 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-green-400/55 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="https://api.whatsapp.com/send?phone=+91 93117 91119&text=Hello%20send%20me%20Quotation!" target="_blank">

                                <img src="/whatsapp.png" className="h-7 " alt="" />
                            </a>
                        </div>

                    </section>

                    <section className="p-5 py-10  text-center transform duration-500 hover:-translate-y-2 cursor-pointer border border-gray-200 border-opacity-100 rounded-lg"  >

                        <img src="https://m.media-amazon.com/images/I/61VcQh6yNsS.jpg" alt="" style={{ width: '400px', height: '250px' }} />
                        <h1 className="text-xl my-2">Oxygen Concentration</h1>

                        <p className="text-sm text-gray-600 mb-2">Portable Oxygen Concentrators: Breathing support anytime, anywhere, hassle-free.</p>
                        <p className="text-sm text-gray-600 my-2">Up to 30% Discount</p>

                        <div className="space-x-2 mt-3 flex justify-center">
                            <a className="inline-flex items-center justify-center rounded-xl text-indigo-100 bg-indigo-900 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-indigo-400/65 transition-transform duration-200 ease-in-out hover:scale-[1.02]" onClick={props.scrollToBottom} target="_blank">
                                Book  Now
                                {/* <img src="/call.png" className="h-7 ml-1 mt-1" style={{ filter: "brightness(0) invert(1)" }} alt="" /> */}
                            </a>
                            <a className="inline-flex items-center justify-center rounded-xl  bg-green-600 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-green-400/55 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="https://api.whatsapp.com/send?phone=+91 93117 91119&text=Hello%20send%20me%20Quotation!" target="_blank">

                                <img src="/whatsapp.png" className="h-7 " alt="" />
                            </a>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default MedicalEquipment