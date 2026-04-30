import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Buy from "../pages/buy/Buy";
import Sell from "../pages/sell/Sell";
import Rent from "../pages/rent/Rent";
import ContactPage from "../pages/contact/Contact";
import JoinUs from "../pages/joinus/JoinUs";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Register from "../pages/signup/Register";
import ScrollToTop from "../components/ScrollToTop"; 
import ScheduleVisit from "../pages/schedule-visit/ScheduleVisit";
import VerifyOtp from "../pages/login/VerifyOtp";
import AddPropertyForm from "../pages/sell/AddPropertyForm";
import BhaiyaTools from "../pages/dashboard/BhaiyaTools";
import AgentSignUp from "../pages/joinus/AgentSignUp";
import VIPSuite from "../pages/founder/VIPSuite";
import RedFlagsGuide from "../pages/resources/RedFlagsGuide";


export const router = createBrowserRouter([
  {
    element: (
        <>
          <ScrollToTop /> 
          <MainLayout />
        </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/buy", element: <Buy /> },
      { path: "/sell", element: <Sell /> },
      { path: "/rent", element: <Rent /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/schedule-site-visit", element: <ScheduleVisit/> },
      { path: "/join-us", element: <JoinUs /> },
      { path: "/dashboard/*", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/verify-otp", element: <VerifyOtp /> },
      { path: "/partner-application-form", element: <PartnerApplicationForm /> },
      { path: "/register", element: <Register /> },
      { path: "/expert-advice", element: <ExpertAdvice /> },
      { path: "/auction", element: <AuctionTab /> },
      { path: "/add-property", element: <AddPropertyForm /> },
      { path: "/dashboard/tools", element: <BhaiyaTools /> },
      { path: "/agent-signup", element: <AgentSignUp /> },
      { path: "/vip-suite", element: <VIPSuite /> },
      { path: "/red-flags-guide", element: <RedFlagsGuide /> },
    ],
  },
]);