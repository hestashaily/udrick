"use client";

import AuthLayout from "./auth/layout";
import Image from "next/image";
import UserTypePage from "./auth/usertype/page";

export default function HomePage() {
  return (
    <AuthLayout>
     <UserTypePage/>
    </AuthLayout>
  );
}
