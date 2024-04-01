import { 
    FaBars,
    FaTwitter,
    FaInstagram,
    FaUser,
    FaChevronDown
 } from "react-icons/fa";
 import { IoCartOutline } from "react-icons/io5";

 import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Search from "./Search";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
  

const MobileNav = () => {
  return (
    <nav className="md:hidden w-full bg-white">
        <div className="flex-col">
            <div className="flex justify-between items-center px-4 py-2">
                <Link href='/'>
                    <Image 
                        src='/images/litto-logo-lg.png'
                        height={50}
                        width={100}
                        alt="logo"
                    />
                </Link>
                
                <div className="flex gap-4">
                    <div>
                        <IoCartOutline className="text-4xl hover:text-gray-600 
                            transition duration-200 cursor-pointer" />
                    </div>
                    <Sheet>
                        <SheetTrigger>
                        <div className="bg-gray-200 px-4 py-2 rounded-md text-gray-700
                            hover:bg-gray-800 hover:text-gray-100 cursor-pointer 
                            transition duration-200">
                                <FaBars className="text-2xl" />
                        </div>
                        </SheetTrigger>
                        <SheetContent>
                            <div className="h-full flex flex-col gap-8">
                                <div className="flex gap-2 text-2xl">
                                    <FaTwitter className="text-gray-500
                                    hover:text-gray-400 transition duration-200
                                    cursor-pointer" />
                                    <FaInstagram className="text-gray-500
                                    hover:text-gray-400 transition duration-200
                                    cursor-pointer" />
                                </div>

                                <ul className="flex flex-col gap-4 text-xl lg:text-lg text-gray-800 
                                font-semibold mt-16">
                                    <li className="tracking-wide hover:text-gray-500
                                        transition duration-200 cursor-pointer
                                        border-b-[1px] border-gray-300 py-4 flex gap-2
                                        items-center">
                                            <FaUser />
                                            <span>My Account</span></li>
                                    <li className="tracking-wide hover:text-gray-500
                                        transition items-center">
                                        Home
                                    </li>
                                    {links.map((link, i) => (
                                        <Link href={`/${link.name}`}>
                                            <li key={i} className="tracking-wide hover:text-gray-500
                                            transition duration-200 cursor-pointer uppercase flex gap-2 items-center">
                                                {link.name} {link.name === 'cannabis' && (<FaChevronDown className='text-sm' />)}
                                            </li>
                                        </Link>
                                    ))}
                                    {/* <li className="tracking-wide hover:text-gray-500
                                        transition duration-200 cursor-pointer">CANNABIS</li>
                                    <li className="tracking-wide hover:text-gray-500
                                        transition duration-200 cursor-pointer">HEMP</li>
                                    <li className="tracking-wide hover:text-gray-500
                                        transition duration-200 cursor-pointer">MERCH</li>
                                    <li className="tracking-wide hover:text-gray-500
                                        transition duration-200 cursor-pointer">OFFERS</li>
                                    <li className="tracking-wide hover:text-gray-500
                                        transition duration-200 cursor-pointer">STORE LOCATOR</li> */}
                                </ul>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>

        <div className="px-4 py-4 bg-gray-950">
            <Search />
        </div>
    </nav>
    // <div className="flex gap-4 items-center text-2xl text-gray-700">
    //     <IoCartOutline className="text-4xl hover:text-gray-500 
    //     transition duration-200 cursor-pointer" />

    //     <div className="bg-gray-200 px-4 py-2 rounded-md text-gray-700
    //         hover:bg-gray-800 hover:text-gray-100 cursor-pointer 
    //         transition duration-200">
    //         <FaBars />
    //     </div>
        
    // </div>

  )
}

export default MobileNav
