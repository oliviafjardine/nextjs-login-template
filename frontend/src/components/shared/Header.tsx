import Link from "next/link";
import { fugaz } from "@/lib/fonts";
import Logout from "@/components/sections/Logout";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 sm:p-8">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-4 bg-white/80 backdrop-blur-md rounded-lg">
        <Link href={"/"}>
          <h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>
            Swello
          </h1>
        </Link>
        <Logout />
      </div>
    </header>
  );
}
