
import img1 from "/homenursing2.jpg";


const IntroductionPage = () => {
    return (
        <>
            <div className="flex bg-gray-300 dark:bg-[#101929] flex-col sm:flex-row  mb-10 ">
                {/* Content Section */}
                <div className="p-6 sm:p-12 md:p-24 sm:w-1/2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Trust Accufly for Nursing Services</h1>
                    <p className="mb-3 text">Accufly hires licensed and experienced nurses who are capable of providing high-quality care for your loved ones</p>
                    <ul className="list-disc mb-4">
                        <li>1000+ experienced nurses</li>
                        <li>100% court & criminal verified</li>
                        <li>Minimum 5 yrs Hospital & Critical care experience</li>
                        <li>Trained to provide emotional support & patient education</li>
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Request a call back</button>
                </div>

                {/* Image Section */}
                <div className="p-6 sm:p-12 md:p-24 sm:w-1/2">
                    <img
                        className="object-cover w-full h-80 rounded-lg"
                        src={img1}
                        alt="image"
                    />
                </div>
            </div>
        </>
    );
};

export default IntroductionPage;