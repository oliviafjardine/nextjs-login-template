import type { Metadata } from "next";
import "./globals.css";
import { opensans } from "../lib/fonts";
import { AuthProvider } from "../context/AuthContext";
import Head from "./head";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Swello",
  description: "Level up your coding career with Swello.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "text-sm sm:text-base min-h-screen flex flex-col " +
            `${opensans.variable} antialiased`
          }
        >
          <Header />
          <main className="w-full max-w-[1000px] mx-auto flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
