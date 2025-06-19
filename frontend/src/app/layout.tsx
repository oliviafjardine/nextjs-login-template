import type { Metadata } from "next";
import { Fugaz_One, Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "../context/AuthContext";

const opensans = Open_Sans({variable: "--font-inter", subsets: ["latin"],});
const fugaz = Fugaz_One({variable: "--font-inter", subsets: ["latin"], weight: ['400']});

export const metadata: Metadata = {
  title: "Swello",
  description: "Level up your coding career with Swello.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>Swello</h1>
      </Link>
    </header>
  )

  const footer = (
    <footer className='bg-stone-100 w-full'>
      <div className='p-4 sm:p-8 grid place-items-center'>
        <p className='text-blue-400 font-semibold '>© 2025 Swello. All rights reserved.</p>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + `${opensans.variable} antialiased`}
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
