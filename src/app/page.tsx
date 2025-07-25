"use client";

import LandingPage from "@/components/LandingPage/LandingPage";
import SellerDashBoard from "@/components/Seller/DashBoard/SellerDashBoard";
import { useEffect, useState } from "react";

export default function RootPage() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  console.log(role, "role");
  if (!role) return <div>Loading...</div>;
  

  return <div className="">{role === "seller" ? <SellerDashBoard /> : <LandingPage />}</div>;
}
