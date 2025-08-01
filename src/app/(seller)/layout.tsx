// import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Suspense } from "react";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <main className="">{children}</main>
      </Suspense>

      <Footer />
    </div>
  );
}
