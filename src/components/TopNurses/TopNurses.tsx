export default function Banner() {
    const posts = [
        {
            title: "Ratnaprabha Koli",
            img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-26270,resizemode-75,msid-102319156/nri/work/singapore-witnesses-growing-interest-from-indian-nurses-as-it-grapples-to-combat-manpower-crisis.jpg",
            content:
                "Experienced General Surgeon in Ajmeri-Gate, Azad-Nagar, Bengali-Market, Central-Secretariat, Chanakya-Puri, Connaught-Place, Daya-Basti, Delhi-Heart-Institute, Delhi.",
            price: "499",
            location: "Delhi",

        },
        {
            title: "Anita Shingare",
            img: "https://www.thestatesman.com/wp-content/uploads/2020/11/QT-Nurse.jpg",
            content:
                "MBBS, DVDL, MD (USA.IM), FACSI, FIADVL, Fellow Cutaneous Allergies, Munich, Germany, Fellow Cutaneous Surgeries & Laser , Tehran, Iran",
            price: "1499",
            location: "Ghaziabad"
        },
        {
            title: "Satish Kumar",
            img: "https://images.ctfassets.net/pdf29us7flmy/1R6E7HQ8vKLvpl7oRzfQ98/24091f22be3154e5be3ce2bfbea0ac55/medical.jpeg?w=720&q=100&fm=jpg",
            content:
                "Experienced General Surgeon in Ajmeri-Gate, Azad-Nagar, Bengali-Market, Central-Secretariat, Chanakya-Puri, Connaught-Place, Daya-Basti, Delhi-Heart-Institute, Delhi.",
            price: "999",
            location: "Noida"
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
            <div className="flex flex-col items-center  gap-8 m-8">
                <h1 className="font-Proxima-Nova font-medium text-2xl md:text-3xl border-b-4 border-blue-600 text-center md:text-left">
                    TOP CERTIFIED NURSES NEAR YOU!
                </h1>

                <div className="grid gap-5 lg:grid-cols-3 ">
                    {posts.map((items) => (
                        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img className="object-cover object-center w-full h-56" alt="avatar" src={items.img} />

                            <div className="px-6 py-4">
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">  {items.title}</h1>

                                <p className="py-2 text-gray-700 dark:text-gray-400">  {items.content}</p>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 11H10V13H14V11Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                                    </svg>

                                    <h1 className="px-2 text-sm">Experiance 4-5 years</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg aria-label="location pin icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                                    </svg>

                                    <h1 className="px-2 text-sm">{items.location}</h1>
                                </div>
                                {/* <span className="relative flex items-center justify-center w-full text-xl m-2  h-full">Book  Consult Now</span> */}
                                {/* <div className="flex flex-row sm:flex- space-y- sm:space-x-6 sm:space-y- m-4">
                                    <a href="#_" className="relative mr-2 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
                                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                            <img src="/doctorConsultation.png" className="w-10 h-10" alt="Doctor Consultation" />
                                            <span className="tab block text-xs hidden md:block text-center" style={{ fontSize: '0.60rem' }}>Online </span>
                                        </span>
                                    </a>
                                    <a href="#_" className="relative mr-2 ml-2 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
                                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                            <img src="/hospitallogo.svg" className="w-10 h-10" alt="Hospital" />
                                            <span className="tab block text-xs hidden md:block" style={{ fontSize: '0.60rem' }}>Hospital </span>
                                        </span>
                                    </a>
                                    <a href="#_" className="relative ml-2 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
                                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                            <img src="/doctorHome.svg" className="w-10 h-10" alt="Doctor Home" />
                                            <span className="tab block text-xs hidden md:block text-center" style={{ fontSize: '0.60rem' }}>Home </span>
                                        </span>
                                    </a>
                                </div> */}



                                {/* <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 m-4">
                                    <div className="flex flex-row sm:flex-row sm:space-x-4 sm:space-y-0 w-full">
                                        <a href="#_" className="relative inline-flex mt-1 p-2 items-center px- text-center overflow-hidden text-sm text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 w-full">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                                            <span className="relative flex items-center justify-center w-full h-full">Book Video Consult</span>
                                        </a>
                                        <a href="#_" className="relative inline-flex mt-1 p-2 items-center justify-center text-center overflow-hidden text-sm text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 w-full">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                                            <span className="relative flex items-center justify-center w-full h-full">Book Hospital Visit</span>
                                        </a>
                                    </div>
                                    <div className="flex justify-center">
                                        <a href="#_" className="relative inline-flex mt-1 p-2 items-center px- text-center overflow-hidden text-sm text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 w-full">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                                            <span className="relative flex items-center justify-center w-full h-full">Book Home Consult</span>
                                        </a>
                                    </div>
                                </div> */}


                                {/* <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
                                </svg>
                    
                                <h1 className="px-2 text-sm">patterson@example.com</h1>
                            </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}