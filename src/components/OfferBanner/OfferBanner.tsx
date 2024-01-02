
export default function Example() {
    return (
        <div className="bg-gray-300 dark:bg-[#101929]  py-12 px-6 font-[sans-serif] dark:bg-[#101929]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-3xl text-center font-bold mb-4">Special Offer For An Hour</h2>
                    <p className="text-base text-center">FullBody Checkup ranges from 1,399 rupees for the essential full-body checkup package to 3,499 rupees for the comprehensive package</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <a
                        href="javascript:void(0)"
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
                    >
                        Subscribe Now
                    </a>
                </div>

            </div>
        </div>
    )
}
