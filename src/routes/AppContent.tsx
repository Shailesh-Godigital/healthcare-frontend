// import { Routes, Route, RouterProvider } from "react-router-dom";
// import routeData from "./route";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { log } from "console";


// type RouteType = {
//   id: string | number;
//   path: string;
//   component: () => JSX.Element;
//   requiresAuth: boolean;
//   roles: string[];
// };

// interface AppContentProps {
//   routes: RouteType[];
// }
// // console.log(routes);


// export default function AppContent({ routes }: AppContentProps) {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const token = sessionStorage.getItem("token");
//   const role = sessionStorage.getItem("role");
//   useEffect(() => {

//     // console.log(routeData);
 
//     const currentRoute = routeData.find((route) => route.path === location.pathname);
//     console.log("🚀 ~ useEffect ~ currentRoute:", currentRoute)
//     // console.log(route);


//     // If token is not present, check if the route requires authentication
//     if (!token) {
//       if (currentRoute && currentRoute.requiresAuth) {
//         console.log("hello");
//         navigate("/login");
//       } else {
//         // Allow access to the route if authentication is not required
//         console.log("hello");
//         return;
//       }
//     }


//     if (currentRoute && currentRoute.requiresAuth) {
//       console.log("🚀 ~ useEffect ~ currentRoute:", currentRoute)
//       const hasAccess = role && currentRoute.roles.includes(role);
//       console.log(currentRoute.roles);
      
//       if (!hasAccess) {
//         // Redirect to access-denied if user doesn't have the required role
//         alert("You Dont Have Access")
//         navigate("/");
//       }
//     }

//     // If token is present, check role-based access

//   }, [routes, location]);

//   return (
//     <Routes>
//       {routeData.map((route) => (
//         <Route key={route.id} path={route.path} element={<route.component />} />
//       ))}
//     </Routes>
//   );
// }



import { Routes, Route } from "react-router-dom";
import routeData from "./route";
// import { useNavigate ,useLocation} from "react-router-dom";
// import { useEffect } from "react";


// type RouteType = {
//   id: string | number;
//   path: string;
//   component: () => JSX.Element;
//   requiresAuth: boolean;
//   roles: string[];
// };


// interface AppContentProps {
//   routes: RouteType[];
// }

export default function AppContent() {
// const navigate = useNavigate()
// const location =useLocation()

// useEffect(()=>{
//   const token = sessionStorage.getItem('token')
//   const role = sessionStorage.getItem('role')

//   // if(!token){
//   //   navigate('/login');
//   //   return;
//   // }

//   const currentRoute = routes.find((route:any)=>{
//     return route.path === location.pathname
//   })
//   if(currentRoute && currentRoute.requiresAuth){
//     const hasAccess = role && currentRoute.roles.includes(role)
//     if(!hasAccess){
//       navigate('/access-denied')
//     }
//   }
// })
  return (


    <Routes>
      {routeData.map((route) => (
        <Route key={route.id} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
