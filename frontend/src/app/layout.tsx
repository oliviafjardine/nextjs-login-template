import type { Metadata } from "next";
import "./globals.css";
import { opensans, fugaz } from "../lib/fonts";
import Link from "next/link";
import { AuthProvider } from "../context/AuthContext";
import Head from "./head";

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
    <footer className='bg-zinc-100 w-full'>
      <div className='p-4 sm:p-8 grid place-items-center'>
        <p className='text-zinc-400 text-xs sm:text-sm '>© 2025 Swello. All rights reserved.</p>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <Head>

      </Head>
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
