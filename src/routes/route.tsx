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
    path: "/home-nursing",
    component: reviews.HomeNursingPage,
    requiresAuth: false,
  },
  {
    id: "route-004",
    path: "/ContactUs",
    component: reviews.ContactPage,
    requiresAuth: false,
  },
  {
    id: "route-005",
    path: "/labs",
    component: reviews.LabScanPage,
    requiresAuth: false,
  },
  {
    id: "route-006",
    path: "/ambulance",
    component: reviews.AmbulanceService,
    requiresAuth: false,
  },
  {
    id: "route-004",
    path: "*",
    component: reviews.NoPageFound,
    requiresAuth: false,
  },
];

export default routeData;
