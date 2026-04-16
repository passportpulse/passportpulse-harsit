import React from "react";
import { useSearchParams } from "react-router-dom";
import DeveloperRegister from "./DeveloperRegister";
import BuyerRegister from "./BuyerRegister";
import SellerRegister from "./SellerRegister";
import AgentRegister from "./AgentRegister";
import PartnerApplicationForm from "../partner-application-form/PartnerApplicationForm";

export default function Register() {
  const [searchParams] = useSearchParams();

  // Get role from URL (e.g., ?role=Partner Login or ?role=Seller Login)
  const roleQuery = searchParams.get("role") || "Buyer Login";
  
  // Normalize userType (extract first word and lowercase it)
  const userType = roleQuery.split(" ")[0].toLowerCase();

  console.log("Register Portal Debug:", { roleQuery, userType });

  try {
    // Route to the specialized portal based on userType
    if (userType === "developer") {
      return <DeveloperRegister />;
    }

    if (userType === "buyer") {
      return <BuyerRegister />;
    }

    if (userType === "seller") {
      return <SellerRegister />;
    }

    if (userType === "expert") {
      return <PartnerApplicationForm />;
    }

    if (userType === "partner" || userType === "agent") {
      return <AgentRegister />;
    }
  } catch (error) {
    console.error("Portal Rendering Error:", error);
  }

  // Fallback to Buyer Portal if no role matches
  return <BuyerRegister />;
}
