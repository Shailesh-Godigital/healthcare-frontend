
// import logourl from "/logo.jpg";
import imgUrlnew from "/finallogo24.jpg";

export default function Footer() {
    return (

        <footer className="bg-white dark:bg-gray-900">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
                        <div className="px-6 text-center lg:text-left">
                            <a href="#" className="mx-auto lg:mx-0">
                                <img className="w-auto h-20 mx-auto lg:mx-0" src={imgUrlnew} alt="" />
                            </a>

                            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Accufly hires licensed and experienced nurses who are capable of providing high-quality care for your loved ones</p>

                            {/* <div className="flex mt-4 mx-5">
                                <div className="flex  items-center justify-center space-x-2"> */}
                            <div className="flex flex-col sm:flex-row mt-4 mx-5">
                                <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-0">


                                    <div className="flex justify-center space-x-5">
                                        <a href="https://www.facebook.com/profile.php?id=61555179124157" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/99426736/admin/feed/posts/?feedType=following" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                                        </a>
                                        <a href="https://www.instagram.com/mydr_24?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                                        </a>
                                        <a href="https://www.tumblr.com/blog/mydr24" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.icons8.com/fluent/30/000000/tumblr.png" />
                                        </a>
                                        <a href="https://twitter.com/mydr24" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                                        </a>
                                        <a href="https://in.pinterest.com/mydr24/" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.icons8.com/fluent/30/000000/pinterest.png" />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UC6Qg6pYVI95423WGrue7g-A\" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.icons8.com/fluent/30/000000/youtube.png" />
                                        </a>
                                    </div>
                                </div>
                                {/* <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Reddit">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                                        </path>
                                    </svg>
                                </a>

                                <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Facebook">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                        </path>
                                    </svg>
                                </a>

                                <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Github">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                        </path>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="text-center sm:text-left">
                                <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Community</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                                <a href="/patientStory" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">PatientStory</a>
                                <a href="/labRegistration" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Lab Vendor Registration</a>
                                <a href="/doctorRegistration" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Doctor Registration</a>
                            </div>

                            {/* <div className="text-center sm:text-left">
                                <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tech</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                            </div> */}

                            <div className="text-center sm:text-left">
                                <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                <a href="/doctor-Consultation" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Doctor Consultation</a>
                                <a href="/surgeryPlanning" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Surgery Planning</a>
                                <a href="/diagnostic" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Diagnostic </a>
                                <a href="/physiotherapy" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Physiotherapy</a>
                                <a href="/pharmacy" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Pharmacy</a>
                                <a href="/surgery" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Surgery </a>
                            </div>

                            <div className="text-center sm:text-left">
                                <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                               <a href="tel:+91 93117 91119" title="Call us"> <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" >+91 93117 91119</span></a>
                               <a href="mailto:customercare@mydr24.com"> <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">customercare@mydr24.com</span></a>
                            </div>
                        </div>
                    </div>

                </div>
                
                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div className="mb-8">
                    {/* <p className="text-center text-gray-500 dark:text-gray-400 ">Powered</p> */}
                    <p className="text-center text-gray-500 dark:text-gray-400 ">© MyDr24 2024 - All rights reserved   || Powered by Accufly Healthcare Pvt.Ltd.</p>
                </div>
                
            </div>
        </footer>
        // <footer className=" w-full bg-white dark:bg-[#020817] mt-12 px-8 ">
        //   <div className="border-t border-blue-gray-50 py-8 ">
        //     <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
        //       <div className="flex flex-row justify-center md:justify-between">
        //         <img
        //           src={logourl}
        //           className="object-contain h-[100px] w-[100px] rounded-lg "
        //           alt="logo"
        //         />

        //       </div>
        //       {/* <h5 className="text-xl font-bold mb-6"></h5> */}
        //       <div className="grid grid-cols-3 justify-between gap-4 mt-4">
        //         {FooterData.map(({ title, items }) => (
        //           <ul key={title}>
        //             <h6 className="text-sm text-blue-gray mb-3 font-medium opacity-40">
        //               {title}
        //             </h6>
        //             {items.map((link) => (
        //               <li key={link}>
        //                 <a
        //                   href="#"
        //                   className="block py-1.5 text-gray font-normal transition-colors hover:text-blue-gray-900"
        //                 >
        //                   {link}
        //                 </a>
        //               </li>
        //             ))}
        //           </ul>
        //         ))}
        //       </div>
        //     </div>
        //     <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        //       <p className="text-sm mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
        //         &copy; {currentYear}. All Rights Reserved.
        //       </p>
        //       <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
        //         <a
        //           href="#"
        //           className="opacity-80 transition-opacity hover:opacity-100"
        //         >
        //           <svg
        //             className="h-5 w-5"
        //             fill="currentColor"
        //             viewBox="0 0 24 24"
        //             aria-hidden="true"
        //           >
        //             <path
        //               fill-rule="evenodd"
        //               d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        //               clip-rule="evenodd"
        //             />
        //           </svg>
        //         </a>
        //         <a
        //           href="https://www.instagram.com/Accufly"
        //           className="opacity-80 transition-opacity hover:opacity-100"
        //         >
        //           <svg
        //             className="h-5 w-5"
        //             fill="currentColor"
        //             viewBox="0 0 24 24"
        //             aria-hidden="true"
        //           >
        //             <path
        //               fill-rule="evenodd"
        //               d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        //               clip-rule="evenodd"
        //             />
        //           </svg>
        //         </a>
        //         <a
        //           href="#"
        //           className="opacity-80 transition-opacity hover:opacity-100"
        //         >
        //           <svg
        //             className="h-5 w-5"
        //             fill="currentColor"
        //             viewBox="0 0 24 24"
        //             aria-hidden="true"
        //           >
        //             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        //           </svg>
        //         </a>
        //       </div>
        //     </div>
        //   </div>
        // </footer>
    );
}
