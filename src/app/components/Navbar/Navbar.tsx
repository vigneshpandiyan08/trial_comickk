import Image from "next/image";
import Link from "next/link";
import MenuCard from "./menucard";

export default function Navbar({ color }: { color: number }) {
  return (
    <div
      className={`bg-taupe-${color} dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 p-2 sm:p-1 shadow-sm select-none`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-2 ">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="font-bold text-xl text-gray-800 dark:text-gray-100">
            Comickk
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            Contact
          </Link>
          <MenuCard email="santhipandiyan03@gmail.com" />
        </div>

        {/* Mobile menu placeholder (optional) */}
        <div className="md:hidden flex items-center">
          {/* You can later add a hamburger menu */}
          <MenuCard email="santhipandiyan03@gmail.com" />
        </div>
      </div>
    </div>
  );
}
