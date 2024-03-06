import { useState, useEffect } from 'react';
import imgUrl from "../../../public/logo.jpg";


export default function Sidebar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const role = sessionStorage.getItem("role") || "defaultRole";

    const cardData = [
        { id: 101, name: 'Vendor Registration', link: '/labVendorRegistration', roles: ['superAdmin'] },
        { id: 109, name: 'Doctor Management', link: '/registeredDoctor', roles: ['superAdmin'] },
        { id: 102, name: 'Packages', link: '/Package', roles: ['superAdmin'] },
        { id: 103, name: 'Profile', link: '/profile', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 104, name: 'User Management', link: '/userManagement', roles: ['superAdmin', 'labVendor'] },
        { id: 111, name: 'Reports', link: '/reports', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 105, name: 'Invoice', link: '/invoice', roles: ['superadmin', 'admin'] },
        { id: 106, name: 'Payment', link: '/payment', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 107, name: 'Support', link: '/support', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 108, name: 'Bookings', link: '/booking', roles: ['superAdmin', 'labVendor', 'user'] },

    ];


    // Filter cards based on user roles
    const filteredCards = cardData.filter((card) => {
        return card.roles.includes(role);
    });
    // const [open, setOpen] = useState(false);
    return (
        <>
            <nav className={isMobile ? 'mobile-navbar' : 'desktop-sidebar'}>
                {isMobile ? (
                    <div className="profile-section relative">
                        <ul className="space-y-2 font-medium mr-20">
                            <li>
                                <div className="relative dark:bg-[#101929] flex flex-col min-w-0 break-words bg-white w-half mb-6 rounded-lg">
                                    <div className="px-6">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full px-2 flex justify-center">
                                                <img
                                                    alt="..."
                                                    src={imgUrl}
                                                    className="shadow-xl mt-1 rounded-half h-20 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-100-px"
                                                />
                                            </div>

                                            <div className="w-full px-4 text-center mt-20">
                                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                    {/* Additional content for larger screens */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center ">
                                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                MYDR24
                                            </h3>
                                            <div className="text-sm leading-normal mt-0 text-blueGray-400 uppercase">
                                                Contact: +91 93117 91119
                                            </div>
                                            <div className="text-sm leading-normal mt-0 text-blueGray-400">
                                                Email: mydr24.care@gmail.com
                                            </div>
                                        </div>

                                        {/* Dropdown menu for mobile view */}

                                        {filteredCards.map((card, index) => (
                                            <div key={index} className="lg:hidden block mt-4 relative z-10">
                                                <select className="block w-full bg-white border border-gray-300 p-2 rounded-md">
                                                    <option value="profile">{card.name}</option>
                                                </select>
                                            </div>
                                        ))}


                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <ul className="space-y-2 font-medium">
                        {/* Add your existing list items here */}
                        <ul className="space-y-2 font-medium">
                            <li>
                                <div className="relative dark:bg-[#101929] flex flex-col min-w-0 break-words bg-white w-half mb-6  rounded-lg ">
                                    <div className="px-6">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full px-2 flex justify-center">
                                                <img
                                                    alt="..."
                                                    // src={require("../../../public/logo.jpg").default}
                                                    src={imgUrl}
                                                    className="shadow-xl mt-1 rounded-half h-20 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-100-px"
                                                />
                                            </div>

                                            <div className="w-full px-4 text-center mt-20">
                                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center ">
                                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                MYDR24
                                            </h3>
                                            <div className="text-sm leading-normal mt-0  text-blueGray-400  uppercase">
                                                {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "} */}
                                                Contact :- +91 93117 91119
                                            </div>
                                            <div className="text-sm leading-normal mt-0  text-blueGray-400  ">
                                                {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "} */}
                                                Email :- mydr24.care@gmail.com
                                            </div>
                                            {/* <div className=" text-blueGray-600 "> */}
                                            {/* <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> */}
                                            {/* Solution Manager */}
                                            {/* </div> */}

                                        </div>

                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg> */}
                                    <span className="ms-3">Dashboard</span>
                                </a>
                            </li>
                            {filteredCards.map((card) => {
                                return (
                                    <li>
                                        <a href={card.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            {/* <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                            </svg> */}
                                            <span className="ms-3">{card.name}</span>
                                        </a>
                                    </li>
                                )
                            })}

                        </ul>
                    </ul>
                )}
            </nav>
        </>
    );
}
