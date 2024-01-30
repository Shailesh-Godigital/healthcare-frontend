import labvendor from '../../../public/vendor.png'
import packagelogo from '../../../public/package.png'
import userManagement from '../../../public/userManagement.png'
import reports from '../../../public/report.png'
import payment from '../../../public/payment.png'
import support from '../../../public/support.png'
import profile from '../../../public/profile.png'
import invoice from '../../../public/invoice.png'

// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function DashboardCard() {
    // const history = useHistory();
    const userRole = sessionStorage.getItem("role");
    // console.log("🚀 ~ DashboardCard ~ role:", role)

    // const cardData = [
    //     { id: 101, name: 'Vendor Registration', image: labvendor, link: '/dashboard', roles: ['admin', 'superadmin','student','subAdmin'] },
    //     { id: 102, name: 'Student', image: student, link: '/student', roles: ['admin', 'superadmin','subAdmin'] },
    //     { id: 103, name: 'Exam', image: exam, link: '/exam', roles: ['admin', 'superadmin','student'] },
    //     { id: 104, name: 'Add Question', image: addQuestion, link: '/addQuestion', roles: ['admin', 'superadmin'] },
    //     { id: 111, name: 'User', image: user, link: '/user', roles: ['admin', 'superadmin'] },
    //     { id: 105, name: 'Add Center', image: addCenter, link: '/addCenter', roles: ['superadmin','admin'] },
    //     { id: 106, name: 'Notice', image: notice, link: '/notice', roles: ['superadmin', 'admin','student','subAdmin'] },
    //     { id: 107, name: 'Contact', image: contact, link: '/contact', roles: ['admin', 'superadmin','student','subAdmin'] },
    //     { id: 108, name: 'Wallet', image: wallet, link: '/wallet', roles: ['admin', 'superadmin','subAdmin'] },
    //     // { id: 108, name: 'Earn With Us', image: earnwithus, link: '/earnWithUs', roles: ['admin', 'superadmin','subAdmin'] },
    //     // { id: 109, name: 'All Test', image: allTest, link: '/allTest', roles: ['admin', 'superadmin','student','subAdmin'] },
   
    // ];

    // const userRoles = localStorage.getItem('role');
    // // console.log('🚀 ~ file: CardDashboard.jsx:44 ~ CardDashboard ~ userRoles:', userRoles);

    // // Filter cards based on user roles
    // const filteredCards = cardData.filter((card) => {
    //     return card.roles.includes(userRoles);
    // });

    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect to the dashboardmain component
        navigate('/labVendorRegistration');
    };
    const handleRedirectPackage = () => {
        navigate('/package')
    }

    const handleRedirectUser = () => {
        navigate('/userManagement')
    }
    const handleRedirectReport = () => {
        navigate('/report')
    }
    return (
        <>
            <section className="pb-20 bg-blueGray-200 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap ">

  
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words w-full  shadow-lg rounded-lg" onClick={handleRedirect}>
                                <div className="px-4 py-5 flex-auto">
                                    <img src={labvendor} alt="Vendor Registration" className="text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">Vendor Registration</h6>
                                </div>
                            </div>
                        </div>
                        

                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg" onClick={handleRedirectPackage}>
                                <div className="px-4 py-5   flex-auto">
                                    <img src={packagelogo} alt="Vendor Registration" className=" text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">Packages</h6>
                                    {/* <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into
                                        parts. A paragraph describing a feature will be enough.
                                    </p> */}
                                </div>
                            </div>
                        </div>

                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg" onClick={handleRedirectPackage}>
                                <div className="px-4 py-5   flex-auto">
                                    <img src={profile} alt="Vendor Registration" className=" text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">Profile</h6>
                                    {/* <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into
                                        parts. A paragraph describing a feature will be enough.
                                    </p> */}
                                </div>
                            </div>
                        </div>

                        {userRole == 'superAdmin' ? (
                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center"  >
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg" onClick={handleRedirectUser}>
                                <div className="px-4 py-5   flex-auto">
                                    <img src={userManagement} alt="Vendor Registration" className=" text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">User Management</h6>
                                    {/* <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into
                                        parts. A paragraph describing a feature will be enough.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        ):('')}
                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center" >
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg" onClick={handleRedirectReport}>
                                <div className="px-4 py-5   flex-auto">
                                    <img src={reports} alt="Vendor Registration" className=" text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">Reports</h6>
                                    {/* <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into
                                        parts. A paragraph describing a feature will be enough.
                                    </p> */}
                                </div>
                            </div>
                        </div>

                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center" >
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg" onClick={handleRedirectReport}>
                                <div className="px-4 py-5   flex-auto">
                                    <img src={invoice} alt="Vendor Registration" className=" text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">Invoice</h6>
                                    {/* <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into
                                        parts. A paragraph describing a feature will be enough.
                                    </p> */}
                                </div>
                            </div>
                        </div>

                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center" onClick={handleRedirect}>
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg">
                                <div className="px-4 py-5   flex-auto">
                                    <img src={payment} alt="Vendor Registration" className=" text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">Payment</h6>
                                    {/* <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into
                                        parts. A paragraph describing a feature will be enough.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center" onClick={handleRedirect}>
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg">
                                <div className="px-4 py-5   flex-auto">
                                    <img src={support} alt="Vendor Registration" className=" text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                    <h6 className="text-xl font-semibold">Support</h6>
                                    {/* <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into
                                        parts. A paragraph describing a feature will be enough.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}