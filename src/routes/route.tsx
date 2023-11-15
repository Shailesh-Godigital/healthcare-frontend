/* Route declarations for the app */
import * as reviews from "../pages";

const routeData = [
  {
    id: "route-001",
    path: "/login",
    component: reviews.Login,
    requiresAuth: true,
  },
  {
    id: "route-000",
    path: "*",
    component: reviews.NoPageFound,
    requiresAuth: false,
  },
];

export default routeData;
