import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { LabsData } from "@/data";

export default function Labs() {
  return (
    <div className="py-16 px-8 flex flex-col items-center gap-8">
      <p className="font-Proxima-Nova font-medium text-2xl md:text-3xl border-b-4 border-blue-600">
        Have a look at our Labs
      </p>
      <div className="flex flex-wrap sm:w-screen md:w-full justify-center md:gap-4">
        {LabsData.map((item, i) => {
          return (
            <Card className="p-2" key={i}>
              <CardContent className="flex flex-col">
                <img src={item.imgSrc} className="w-[500px] h=[400px]"></img>
                <div className="flex flex-row justify-between">
                  <p>{item.name}</p>
                  <a href={`/labs${item.link}`}>
                    <Button variant={"link"}>{"View Details"}</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <a href={"/labs"}>
        <Button variant={"secondary"}>View All</Button>
      </a>
    </div>
//     <>
//       <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
//         <div className="absolute inset-0">
//           <div className="h-1/3 bg-white sm:h-2/3"></div>
//         </div>
//         <div className="relative mx-auto max-w-7xl">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Have a look at our Labs</h2>
            
//           </div>
//           <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

//           <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
//     <div className="flex-shrink-0">
//         <img className="h-48 w-full object-cover" src="https://images.careerindia.com/img/2014/09/29-medicallabtechnician.jpg" alt="" />
//     </div>
//     <div className="flex flex-1 flex-col justify-between bg-white p-3">
//         <div className="flex-1">
           
//         </div>
//     </div>
// </div>


//             <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
//               <div className="flex-shrink-0">
//                 <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
//               </div>
//               <div className="flex flex-1 flex-col justify-between bg-white p-6">
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-indigo-600">
//                     <a href="#" className="hover:underline">Video</a>
//                   </p>
//                   <a href="#" className="mt-2 block">
//                     <p className="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
//                     <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
//                       facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.,
//                       tempore temporibus quo laudantium.</p>
//                   </a>
//                 </div>
//                 <div className="mt-6 flex items-center">
//                   <div className="flex-shrink-0">
//                     <a href="#">
//                       <span className="sr-only">Brenna Goyette</span>
//                       <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
//                     </a>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm font-medium text-gray-900">
//                       <a href="#" className="hover:underline">Brenna Goyette</a>
//                     </p>
//                     <div className="flex space-x-1 text-sm text-gray-500">
//                       {/* <time datetime="2020-03-10">Mar 10, 2020</time> */}
//                       <span aria-hidden="true">·</span>
//                       <span>4 min read</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
//               <div className="flex-shrink-0">
//                 <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
//               </div>
//               <div className="flex flex-1 flex-col justify-between bg-white p-6">
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-indigo-600">
//                     <a href="#" className="hover:underline">Case Study</a>
//                   </p>
//                   <a href="#" className="mt-2 block">
//                     <p className="text-xl font-semibold text-gray-900">Improve your customer experience</p>
//                     <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
//                       harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis
//                       perferendis hic.</p>
//                   </a>
//                 </div>
//                 <div className="mt-6 flex items-center">
//                   <div className="flex-shrink-0">
//                     <a href="#">
//                       <span className="sr-only">Daniela Metz</span>
//                       <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
//                     </a>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm font-medium text-gray-900">
//                       <a href="#" className="hover:underline">Daniela Metz</a>
//                     </p>
//                     <div className="flex space-x-1 text-sm text-gray-500">
//                       {/* <time datetime="2020-02-12">Feb 12, 2020</time> */}
//                       <span aria-hidden="true">·</span>
//                       <span>11 min read</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//     </>
  );
}
