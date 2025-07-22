"use client";

import AuthLayout from "./auth/layout";

import UserTypePage from "./auth/usertype/page";

export default function HomePage() {
  return (
    <AuthLayout>
     <UserTypePage/>
    </AuthLayout>
  );
}
