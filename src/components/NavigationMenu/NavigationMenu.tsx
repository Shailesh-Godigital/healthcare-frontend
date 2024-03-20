import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
// import { Headerdata } from "@/data";


interface vendorData {
  _id: string;
  title: string;
  imgurl: string;
  href: string;
  description: string;
  contents: string;

  // Add other properties as needed
}

export default function navigationMenu() {

  const [vendorData, setVendorData] = useState<vendorData[]>([]);

  const fetchVendorData = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/package/getPackage`;
      const response = await axios.get<vendorData[]>(apiUrl);
      console.log('🚀 ~ fetchVendorData ~ response:', response.data);
      setVendorData(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchVendorData();
  }, []);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {vendorData.map((item, index) =>
            item.contents.length ? (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3  lg:w-[1070px] lg:grid-cols-[1fr_1fr]">
                    <li className="lg:w-[230px]">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col  rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        // href={item.href}
                        >
                          <img src={item.imgurl} className="rounded-lg" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {item.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <div className="grid gap-3 p-2 lg:w-[780px] lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
                      {Array.isArray(item.contents) &&
                        item.contents.map((content: { href: any; title: string | undefined }, index: React.Key | null | undefined) => (
                          <div key={index} className="col-span-1">
                            <ListItem
                              href={`${item.href}/${content.href}`}
                              title={content.title}
                            ></ListItem>
                          </div>
                        ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <a href={item.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});


// import * as React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// import { cn } from "@/lib/utils";
// import { Headerdata } from "@/data";

// export default function navigationMenu() {
//   return (
//     <>
//       <NavigationMenu>
//         <NavigationMenuList>
//           {Headerdata.map((item, index) =>
//             item.contents.length ? (
//               <NavigationMenuItem key={index}>
//                 <NavigationMenuTrigger>
//                   <a href={item.href}>{item.title}</a>
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid gap-3 p-4 lg:w-[1070px] lg:grid-cols-[1fr_1fr]">
//                     <li className="lg:w-[230px]">
//                       <NavigationMenuLink asChild>
//                         <a
//                           className="flex h-full w-full select-none flex-col  rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                           href={item.href}
//                         >
//                           <img src={item.imgurl} className="rounded-lg" />
//                           <div className="mb-2 mt-4 text-lg font-medium">
//                             {item.title}
//                           </div>
//                           <p className="text-sm leading-tight text-muted-foreground">
//                             {item.description}
//                           </p>
//                         </a>
//                       </NavigationMenuLink>
//                     </li>
//                     <div className="grid gap-3 p-2 lg:w-[780px] lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
//                       {item.contents.map((content, index) => (
//                         <div key={index} className="col-span-1">
//                           <ListItem
//                             href={`${item.href}/${content.href}`}
//                             title={content.title}
//                           ></ListItem>
//                         </div>
//                       ))}
//                     </div>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             ) : (
//               <NavigationMenuItem key={index}>
//                 <a href={item.href}>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     {item.title}
//                   </NavigationMenuLink>
//                 </a>
//               </NavigationMenuItem>
//             )
//           )}
//         </NavigationMenuList>
//       </NavigationMenu>
//     </>
//   );
// }
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
