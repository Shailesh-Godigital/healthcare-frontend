import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Smile,
  MapPin,
  Clock,
  Shield,
  Heart,
  LucideIcon,
} from "lucide-react";
import { BenefitsData } from "@/data";

interface IconComponents {
  [key: string]: LucideIcon;
}
const iconComponents: IconComponents = {
  Target,
  Smile,
  MapPin,
  Clock,
  Shield,
  Heart,
};

const Cards: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-16 gap-8">
      <h1 className="font-Proxima-Nova font-medium text-2xl md:text-3xl border-b-4 border-blue-600">
        Why Choose MYDR24
      </h1>
      <div className="flex flex-wrap w-screen justify-center gap-2 md:gap-4 px-2 md:px-4">
        {BenefitsData.map((item, index) => {
          const IconComponent = iconComponents[item.icon];

          return (
            <Card
              className="p-2 w-full md:w-[200px] bg-gray-100 dark:bg-[#101929]"
              key={index}
            >
              <CardContent className="flex flex-col justify-between h-full">
                <div className="flex flex-row justify-center items-center">
                  {/* <p className="text-xl opacity-50">{`0${index + 1}`}</p> */}
                  {IconComponent && <IconComponent size={50} />}
                </div>
                <div>
                  <p className="text-base text-center">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
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
