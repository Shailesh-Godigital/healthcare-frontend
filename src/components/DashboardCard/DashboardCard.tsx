import labvendor from '../../../public/vendor.png'
import packagelogo from '../../../public/package.png'
import userManagement from '../../../public/userManagement.png'
import reports from '../../../public/report.png'
import payment from '../../../public/payment.png'
import support from '../../../public/support.png'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function DashboardCard() {
    // const history = useHistory();

    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect to the dashboardmain component
        navigate('/mainDashboard');
    };
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
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg">
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

                        {/* <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded-lg">
                                <div className="px-4 dark:bg-[#101929]  py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                        <i className="fas fa-retweet"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Keep you user engaged by providing meaningful information.
                                        Remember that by this time, the user is curious.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg">
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
                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words  w-full  shadow-lg rounded-lg">
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
                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center">
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
                        <div className="lg:pt-12  pt-6 w-full md:w-4/12 px-4 text-center">
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