import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex justify-between">
          <div className="font-bold text-lg">MyApp</div>
          <div className="space-x-4">
            <Link href="/main/home">Home</Link>
            <Link href="/main/about">About</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 p-4">{children}</main>

      <footer className="bg-gray-100 text-center p-4">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}
