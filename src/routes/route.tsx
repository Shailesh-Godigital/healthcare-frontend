import { components } from "react-select";
import * as reviews from "../pages";

const routeData = [
  {
    id: "route-000",
    path: "/",
    component: reviews.HomePage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-001",
    path: "/login",
    component: reviews.Login,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-002",
    path: "/register",
    component: reviews.Register,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-003",
    path: "/home-nursing",
    component: reviews.HomeNursingPage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-004",
    path: "/ContactUs",
    component: reviews.ContactPage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-005",
    path: "/labs",
    component: reviews.LabScanPage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-006",
    path: "/ambulance",
    component: reviews.AmbulanceService,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-006",
    path: "/Dashboard",
    component: reviews.Dashboard,
    requiresAuth: true,
    roles: ['user', 'superAdmin', 'labVendor', 'labVendor-staff']
  },
  {
    id: "route-007",
    path: "/labRegistration",
    component: reviews.LabVendorRegistration,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-007",
    path: "/mainDashboard",
    component: reviews.MainDashboard,
    requiresAuth: true,
    roles: ['user', 'superAdmin', 'labVendor', 'labVendor-staff']
  },
  {
    id: "route-008",
    path: "/labVendorRegistration",
    component: reviews.LabVendorDashboard,
    requiresAuth: true,
    roles: ['superAdmin']
  },
  {
    id: "route-009",
    path: "/userManagement",
    component: reviews.UserManagementDashboard,
    requiresAuth: true,
    roles: ['superAdmin'],
  },
  {
    id: "route-010",
    path: "/package",
    component: reviews.PackageDashboard,
    requiresAuth: true,
    roles: ['superAdmin']
  },
  {
    id: "route-011",
    path: "/blood-test/:id",
    component: reviews.TestPage,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-011",
    path: "/labs/:id",
    component: reviews.TestPage,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-012",
    path: "/doctor-Consultation",
    component: reviews.doctorConsultation,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-013",
    path: "/surgeryPlanning",
    component: reviews.surgeryPlanning,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-013",
    path: "/diagnostic",
    component: reviews.Diagnostic,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-013",
    path: "/physiotherapy",
    component: reviews.Physiotherapy,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-013",
    path: "/Pharmacy",
    component: reviews.Pharmacy,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-14",
    path: "/booking",
    component: reviews.MyBooking,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-15",
    path: "*",
    component: reviews.NoPageFound,
    requiresAuth: false,
    roles: []
  },
  {
    id: "route-016",
    path: "/profile",
    component: reviews.EditProfile,
    requiresAuth: true,
    roles: ['superAdmin','user','labVendor'],
  },
  {
    id: "route-017",
    path: "/doctorRegistration",
    component: reviews.doctorRegistraion,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-018",
    path: "/registeredDoctor",
    component: reviews.doctorRegistrationDashboard,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-019",
    path: "/ourTieups/hospitalTieups",
    component: reviews.HospitalTieups,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-020",
    path: "/ourTieups/corporatesTieups",
    component: reviews.CorporateTieups,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-021",
    path: "/ourTieups/schoolTieups",
    component: reviews.SchoolTieups,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-022",
    path: "/ourTieups/societyTieups",
    component: reviews.SocietyTieups,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-023",
    path: "/patientStory",
    component: reviews.PatientStory,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-024",
    path: "/surgery",
    component: reviews.SurgeryPage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-024",
    path: "/analytics",
    component: reviews.AnalyticsPage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-025",
    path: "/privacyPolicies",
    component: reviews.PrivacyPolicies,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-026",
    path: "/refund-policy",
    component: reviews.RefundPage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-026",
    path: "/terms-conditions",
    component: reviews.TermsAndConditionPage,
    requiresAuth: false,
    roles: [],
  },
  {
    id: "route-026",
    path: "/shipping-policy",
    component: reviews.ShippingPolicyPage,
    requiresAuth: false,
    roles: [],
  },
];

export default routeData;
