"use client";
import { useEffect, useState } from "react";
import LandingPage from "@/components/LandingPage/LandingPage";
import SellerDashBoard from "@/components/Seller/DashBoard/SellerDashBoard";

export default function RoleBasedPage() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
    setLoading(false); 
  }, []);

  if (loading) {
    return (<div className="loader-container">
  <div className="colorful"></div>
</div>
    )
  }

  if (!role) return <LandingPage />;

  return role === "seller" ? <SellerDashBoard /> : <LandingPage />;
}
