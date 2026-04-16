import React from "react";
import { useSearchParams } from "react-router-dom";
import DeveloperRegister from "./DeveloperRegister";
import BuyerRegister from "./BuyerRegister";
import SellerRegister from "./SellerRegister";
import AgentRegister from "./AgentRegister";

export default function Register() {
  const [searchParams] = useSearchParams();

  // Get role from URL (e.g., ?role=Partner Login or ?role=Seller Login)
  const roleQuery = searchParams.get("role") || "Buyer Login";
  
  // Normalize userType (extract first word and lowercase it)
  const userType = roleQuery.split(" ")[0].toLowerCase();

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

  if (userType === "partner" || userType === "agent") {
    return <AgentRegister />;
  }

  // Fallback to Buyer Portal if no role matches
  return <BuyerRegister />;
}
