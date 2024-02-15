import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

type RouteType = {
  id: string | number;
  path: string;
  component: () => JSX.Element;
  requiresAuth: boolean;
  roles: string[];
};

interface AppContentProps {
  routes: RouteType[];
}

export default function AppContent({ routes }: AppContentProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = sessionStorage.getItem("sessionToken");
  const role = sessionStorage.getItem("role");

  useEffect(() => {
    const currentRoute = routes.find((route) => route.path === location.pathname);

    if (currentRoute) {
      if (!currentRoute.requiresAuth) {
        // If the route doesn't require authentication, display the component
        return;
      }

      if (!token) {
        // If token is not present, redirect to login page
        navigate("/login");
        return;
      }

      // Check if the user has the required role for accessing the route
      const hasAccess = role && currentRoute.roles.includes(role);

      if (!hasAccess) {
        // Display an alert and redirect to dashboard if the user doesn't have the required role
        alert("You are not authorized.");
        navigate("/dashboard");
        return;
      }
    }
  }, [routes, location, navigate, token, role]);

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}





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
//   const token = sessionStorage.getItem("sessionToken");
//   console.log("🚀 ~ AppContent ~ token:", token)
//   const role = sessionStorage.getItem("role");
//   useEffect(() => {


//     const currentRoute = routeData.find((route) => route.path === location.pathname);
//     console.log("🚀 ~ useEffect ~ currentRoute:", currentRoute)
 

//     if (currentRoute && currentRoute.requiresAuth) {
//       console.log("🚀 ~ useEffect ~ currentRoute:", currentRoute)
//       const hasAccess = role && currentRoute.roles.includes(role);
//       console.log(currentRoute.roles);

//       if (!hasAccess) {
//         // Redirect to access-denied if user doesn't have the required role
//         console.log("yess");
//         if (token) {
//           if (currentRoute && currentRoute.requiresAuth) {
//             console.log("hello");
//             navigate("/login");
//           } else {
//             // Allow access to the route if authentication is not required
//             console.log("hello");
//             return;
//           }
//         }

//         navigate("/dashboard");
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



// import { Routes, Route } from "react-router-dom";
// import routeData from "./route";
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

// export default function AppContent({ routes }) {
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
//   return (


//     <Routes>
//       {routeData.map((route) => (
//         <Route key={route.id} path={route.path} element={<route.component />} />
//       ))}
//     </Routes>
//   );
// }
