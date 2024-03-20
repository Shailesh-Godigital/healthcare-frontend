// import React from 'react'
import imgUrlnew from "/happy.svg";
// import locationicon from '/locationnew.gif'
import allInOne from '/allinone.gif'
import testReport from '/report.gif'
import support from '/support.gif'
function Cards() {
  return (
    <>

      <section className="text-gray-700 body-font z-0">

        <div className="container px-5 py-14 mx-auto">
          <h1 className="font-Proxima-Nova pb-5 font-medium text-2xl md:text-3xl border-blue-600 m-5 text-center">
            Why Choose MYDR24
          </h1>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={imgUrlnew}
                  className="text-indigo-500 w-12 h-16 md:w-16 inline-block"
                  alt="Ambulance"
                />
                <p className="leading-relaxed title-font font-medium text-md text-gray-900">
                  Thousands+ Satisfied Customers
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full z-0">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={allInOne}
                  className="text-indigo-500 w-12 h-16 md:w-16 inline-block z-0"
                  alt="Ambulance"
                />
                <p className="leading-relaxed title-font font-medium text-md text-gray-900">
                  All-in-One Complete Healthcare
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={testReport}
                  className="text-indigo-500 w-12 h-16 md:w-16 inline-block"
                  alt="Ambulance"
                />
                <p className="leading-relaxed title-font font-medium text-md text-gray-900">
                  Fast & Accurate Test Reports
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={support}
                  className="text-indigo-500 w-12 h-16 md:w-16 inline-block"
                  alt="Ambulance"
                />
                <p className="leading-relaxed title-font font-medium text-md text-gray-900">
                  24/7 Customer Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// export default Cards


// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Target,
//   Smile,
//   MapPin,
//   Clock,
//   Shield,
//   Heart,
//   LucideIcon,
// } from "lucide-react";
// import { BenefitsData } from "@/data";

// interface IconComponents {
//   [key: string]: LucideIcon;
// }
// const iconComponents: IconComponents = {
//   Target,
//   Smile,
//   MapPin,
//   Clock,
//   Shield,
//   Heart,
// };

// const Cards: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center py-16 gap-8">
//       <h1 className="font-Proxima-Nova font-medium text-2xl md:text-3xl border-b-4 border-blue-600">
//         Why Choose MYDR24
//       </h1>
//       <div className="flex flex-wrap w-screen justify-center gap-2 md:gap-4 px-2 md:px-4">
//         {BenefitsData.map((item, index) => {
//           const IconComponent = iconComponents[item.icon];

//           return (
//             <Card
//               className="p-2 w-full md:w-[200px] bg-gray-100 dark:bg-[#101929]"
//               key={index}
//             >
//               <CardContent className="flex flex-col justify-between h-full">
//                 <div className="flex flex-row justify-center items-center">
//                   {/* <p className="text-xl opacity-50">{`0${index + 1}`}</p> */}
//                   {IconComponent && <IconComponent size={50} />}
//                 </div>
//                 <div>
//                   <p className="text-base text-center">{item.description}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// const Cards: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center py-4 gap-8">
//       <h1 className="font-Proxima-Nova font-medium text-2xl md:text-3xl">
//         Why Choose Accufly
//       </h1>
//       <div className="flex flex-wrap justify-center gap-4 md:gap-8">
//         {BenefitsData.map((item, index) => {
//           const IconComponent = iconComponents[item.icon];

//           return (
//             <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2" key={index}>
//               <Card className="w-full bg-gray-100 dark:bg-[#101929]">
//                 <CardContent className="flex flex-col justify-between h-full">
//                   <div className="flex flex-row justify-between items-center">
//                     <p className="text-xl">{index + 1}</p>
//                     {IconComponent && <IconComponent size={40} />}
//                   </div>
//                   <div>
//                     <p className="text-base">{item.description}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export default Cards;
