import labvendor from '../../../public/vendor.png'
import packagelogo from '../../../public/package.png'
import userManagement from '../../../public/userManagement.png'
import reports from '../../../public/report.png'
import payment from '../../../public/payment.png'
import support from '../../../public/support.png'
import profile from '../../../public/profile.png'
import invoice from '../../../public/invoice.png'
import booking from '../../../public/booking.png'
import doctor from '../../../public/doctornew.png'
import anylitics from '../../../public/analytics.png'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Card } from '../ui/card'
export default function DashboardCard() {
    // const history = useHistory();
    const role = sessionStorage.getItem("role") || "defaultRole";
    console.log("🚀 ~ DashboardCard ~ role:", role)

    const cardData = [
        { id: 101, name: 'Vendor Registration', image: labvendor, link: '/labVendorRegistration', roles: ['superAdmin'] },
        { id: 109, name: 'Doctor Registration', image: doctor, link: '/registeredDoctor', roles: ['superAdmin'] },

        { id: 102, name: 'Packages', image: packagelogo, link: '/package', roles: ['superAdmin'] },
        { id: 103, name: 'Profile', image: profile, link: '/profile', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 104, name: 'User Management', image: userManagement, link: '/userManagement', roles: ['superAdmin', 'labVendor'] },
        { id: 109, name: 'Analytics', image: anylitics, link: '/analytics', roles: ['superAdmin', 'labVendor'] },
        { id: 111, name: 'Reports', image: reports, link: '/reports', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 105, name: 'Invoice', image: invoice, link: '/invoice', roles: ['superadmin', 'admin'] },
        { id: 106, name: 'Payment', image: payment, link: '/payment', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 107, name: 'Support', image: support, link: '/support', roles: ['superAdmin', 'labVendor', 'user'] },
        { id: 108, name: 'Bookings', image: booking, link: '/booking', roles: ['superAdmin', 'labVendor', 'user'] },
       

    ];


    // Filter cards based on user roles
    const filteredCards = cardData.filter((card) => {
        return card.roles.includes(role);
    });
    console.log("🚀 ~ filteredCards ~ filteredCards:", filteredCards)


    const navigate = useNavigate();

    const handleRedirect = (link:any) => {
        // Redirect to the specified link from the clicked card
        navigate(link);
    };
    
    return (
        <>
            <section className="pb-20 bg-blueGray-200 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap ">
                        {filteredCards.map((Card) => {

                            return (
                            
                                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                        <div className="relative p-5 dark:bg-[#101929] flex flex-col min-w-0 break-words w-full  shadow-lg rounded-lg" onClick={() => handleRedirect(Card.link)}>
                                       
                                            <div className="px-4 py-5 flex-auto">
                                                <img src={Card.image} alt="Vendor Registration" className="text-center inline-flex items-center justify-center w-20 h-30 mb-5 shadow-lg rounded-full bg-lightBlue-400" />
                                                <h6 className="text-xl font-semibold">{Card.name}</h6>
                                            </div>

                                        </div>
                                    </div>
                           
                            )
                        })}

                    </div>


                </div>
            </section>
        </>
    )
}