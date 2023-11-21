/* Route declarations for the app */
import * as reviews from "../pages";

const routeData = [
  {
    id: "route-000",
    path: "/",
    component: reviews.HomePage,
    requiresAuth: false,
  },
  {
    id: "route-001",
    path: "/login",
    component: reviews.Login,
    requiresAuth: false,
  },
  {
    id: "route-002",
    path: "/register",
    component: reviews.Register,
    requiresAuth: false,
  },
  {
    id: "route-003",
    path: "*",
    component: reviews.NoPageFound,
    requiresAuth: false,
  },
];

export default routeData;
