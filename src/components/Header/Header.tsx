import React, { useState, useEffect } from "react";

// import { useTheme } from "@/components/theme-provider";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

import { NavigationMenu, Accordion } from "@/components";

import { User2, Phone } from "lucide-react";
// import imgUrl from "/logo.jpg";
import imgUrlnew from "/finallogo24.jpg";
import ambulance from '../../../public/ambulanceTop.svg'
import DoctorConsultation from '../../../public/doctorConsultation.png';
import Pharmacy from '../../../public/Pharmacy.png';
import Diagnostic from '../../../public/diagnosticTests.png';
import HealthCare from '../../../public/homeNursing.png';
import Ambulance from '../../../public/surgeryicon.png';
import Whatsapp from '../../../public/whatsapp.png';
import Call from '../../../public/call.png';
import Backtotop from '../../../public/Backtotop.png';

import { useNavigate } from 'react-router-dom';

export default function Header() {
  // const { theme, setTheme } = useTheme();
  const [hamburger, setHamburger] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();
  const login = sessionStorage.getItem('login')
  const userName = sessionStorage.getItem('firstName')

  const handleHamburger = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHamburger((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 200); // Show the button when scrolled down 200px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [menuVisible, setMenuVisible] = useState(false);

  const handleTabClick = () => {
    setMenuVisible(!menuVisible);
  };
  const handleProfile = () => {

    navigate('/profile')
    setMenuVisible(false);
  };
  const handleDashboard = (e: any) => {

    e.preventDefault()
    setMenuVisible(false);
  };
  const handleLogout = () => {
    console.log("logout");

    sessionStorage.removeItem('login');
    sessionStorage.removeItem('sessionToken');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('user_email');
    sessionStorage.removeItem('status');
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("userId")
    sessionStorage.removeItem("lastName")
    navigate("/")
    setMenuVisible(false);
  };


  return (
    <>
      <div className="flex flex-col w-full px-2 md:px-10 lg:px-20 py-2 justify-between">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="w-16 gap-8 flex flex-row items-center">
            <img
              src={imgUrlnew}
              className="object-contain h-full w-full rounded-lg"
              // style={{ width: "100px", height: "100px" }}
              alt="logo"
            />

            <Input
              type="text"
              placeholder="Search..."
              className="w-[200px] hidden md:block"
            />
          </div>
          <div className="">

            <div className="flex flex-row justify-between items-center space-x-4">
              <a href="tel:+91 93117 91119">
                <img
                  src={ambulance}
                  className="object-contain h-8 w-10 rounded-lg ml-1 items-center animate-pulse "
                  alt="Ambulance"
                />
              </a>


              {login !== "true" ? (
                <a href="/login">
                  <div className="flex flex-row items-center space-x-1">
                    <User2 size={20} absoluteStrokeWidth />
                    <p className="text-xs hidden md:block">Login/Signup</p>
                  </div>
                </a>
              ) : (
                <div className="relative">
                  <a href="#" onClick={handleTabClick}>
                    <div className="flex flex-row items-center space-x-1">
                      {/* Assuming User2 is an icon component */}
                      <User2 size={20} absoluteStrokeWidth />
                      <p className="text-xs hidden md:block">{userName}</p>
                    </div>
                  </a>

                  {menuVisible && (
                    <div className="p-2 ml-4 dark:bg-[#101929] absolute top-8 right-0 bg-white border border-gray-300 shadow-md">
                      <ul>
                        <li>
                          <a href="/Dashboard" onClick={() => handleDashboard('Dashboard')}>
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => handleProfile()}>
                            Profile
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => handleLogout()}>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )
              }
              <a className="hidden md:block" href="tel:+91 93117 91119" title="Call us">
                <div className="flex flex-row items-center space-x-1">
                  <Phone size={20} absoluteStrokeWidth />
                  <div className="flex flex-col">
                    <div className="text-xs">Customer Support</div>
                    <div className="text-xs">+91 93117 91119</div>
                  </div>
                </div>
              </a>

              {/* <div>
                <Switch
                  id="darkmode"
                  checked={theme === "dark"}
                  onCheckedChange={() =>
                    setTheme(theme == "dark" ? "light" : "dark")
                  }
                  className="hidden"
                />
                <Label htmlFor="darkmode" className="cursor-pointer">
                  {theme == "dark" ? <Sun /> : <Moon />}
                </Label>
              </div> */}


              <div
                className="md:block lg:hidden xl:hidden 2xl:hidden cursor-pointer"
                onClick={handleHamburger}
              >
                <div className="space-y-2">
                  <div className="w-8 h-0.5 bg-gray-800 dark:bg-gray-300"></div>
                  <div className="w-8 h-0.5 bg-gray-800 dark:bg-gray-300"></div>
                  <div className="w-8 h-0.5 bg-gray-800 dark:bg-gray-300"></div>
                </div>
              </div>



            </div>
            <div className="md:block lg:hidden xl:hidden 2xl:hidden cursor-pointer">
              <section className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-gray-800 bg-white dark:bg-white backdrop-blur-lg bg-opacity-100 dark:bg-opacity-30 dark:text-gray-400 border-t-2 border-royal/20">
                <div id="tabs" className="flex justify-between">
                  <a href="/doctor-Consultation" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={DoctorConsultation} alt="Doctor Consultation" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Doctor</span>
                  </a>

                  <a href="/pharmacy" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={Pharmacy} alt="Pharmacy" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Medicine</span>
                  </a>

                  <a href="/diagnostic" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={Diagnostic} alt="Diagnostic" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Diagnostic</span>
                  </a>

                  <a href="/surgeryPlanning" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={Ambulance} alt="Surgery Planning" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Surgery</span>
                  </a>

                  <a href="/" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={HealthCare} alt="Services" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Services</span>
                  </a>
                </div>
              </section>
            </div>



          </div>
        </div>

        <div className="fixed right-0 bottom-10 lg:right-4 lg:bottom-4 p-5 space-y-2 z-99" style={{ zIndex: 100 }}>
          <a href="tel:+91 93117 91119" title="Call us" className="md:ml-2 mr-4">
            <img src={Call} alt="Doctor Consultation" className="max-w-full h-11 mb-1" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=+91 93117 91119&text=Hello%20send%20me%20Quotation%20for%20FullBody%20Checkup!" title="Share on WhatsApp" target="blank" className="md:ml-2 mr-4">
            <img src={Whatsapp} alt="Doctor Consultation" className="max-w-full h-11 mb-1" />
          </a>

          {showBackToTop && (
            <div
              className="fixed dark:bg-[#101929] left-3 bottom-5 z-9999 p-3 bg-royal text-white cursor-pointer rounded-full"
              onClick={scrollToTop}
            >
              <a className="md:ml-2 mr-7">
                <img src={Backtotop} alt="Doctor Consultation" className="max-w-full dark:bg-[#101929] h-7 mb-1" />
              </a>
            </div>
          )}
        </div>


        <div className="flex flex-row border-t-2 border-gray py-2 justify-evenly">
          <div className="hidden lg:block">
            <NavigationMenu />
          </div>
          {hamburger && (
            <div
              className={`w-full md:block lg:hidden xl:hidden 2xl:hidden absolute z-10 bg-white dark:bg-[#020817] ${hamburger ? "h-screen" : "hidden"
                }`}
            >
              <Accordion />
            </div>
          )}
        </div>

        {/* <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
            <div className="rounded-lg bg-teal-600 p-2 shadow-lg sm:p-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg bg-teal-800 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                  </span>
                  <p className="ml-3 truncate font-medium text-white">
                    <span className="md:hidden">Save 50% on any plan with Code 'LAUNCH'</span>
                    <span className="hidden md:inline">Launch Month! Use Code 'LAUNCH' to save 50% on any plan!</span>
                  </p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <a className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                    href="#">Get Started
                  </a>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button type="button" className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"><span className="sr-only">Dismiss</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-white"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </>
  );
}
