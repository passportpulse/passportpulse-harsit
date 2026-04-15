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
import DeveloperRegister from "../pages/signup/DeveloperRegister";
import ScrollToTop from "../components/ScrollToTop"; 
import ScheduleVisit from "../pages/schedule-visit/ScheduleVisit";
import VerifyOtp from "../pages/login/VerifyOtp";
import PartnerApplicationForm from "../pages/partner-application-form/PartnerApplicationForm";
import ExpertAdvice from "../pages/expert-advice/ExpertAdvice";
import AuctionTab from "../pages/auction-tab/AuctionTab";


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
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/verify-otp", element: <VerifyOtp /> },
      { path: "/partner-application-form", element: <PartnerApplicationForm /> },
      { path: "/register", element: <Register /> },
      { path: "/developer-signup", element: <DeveloperRegister /> },
      { path: "/expert-advice", element: <ExpertAdvice /> },
      { path: "/auction", element: <AuctionTab /> },
    ],
  },
]);