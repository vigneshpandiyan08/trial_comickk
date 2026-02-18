import Image from "next/image";
import Link from "next/link";
import MenuCard from "./menucard";

export default function Navbar({color}:{color:number}) {

    return(
        <>
            <div className={`bg-slate-${color} dark:bg-gray-800 p-4 sm:p-2 shadow-md select-none`}>
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={50}
                            height={50}
                            className="mr-2"
                        />
                        <span className="font-bold text-xl text-gray-800">Comickk</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/about" className="text-gray-600 hover:text-gray-800 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300">
                            About
                        </Link>

                        <Link href="/contact" className="text-gray-600 hover:text-gray-800 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300">
                            Contact
                        </Link>
                        <MenuCard email="santhipandiyan03@gmail.com" />
                    </div>
                </div>
            </div>
        </>
    );
}