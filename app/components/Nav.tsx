import { 
    FaShoppingCart,
    FaUser,
    FaSearch
 } from "react-icons/fa";
import Menu from "./Menu";
import Search from "./Search";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="hidden md:inline-block w-full flex-col justify-center">
        <div className='m-auto max-w-[1080px] h-24 px-4 flex items-center justify-between'>
            {/* <div className="text-[48px]">
                LITTO
            </div> */}
            <Link href='/'>
                <Image 
                    src='/images/litto-logo-lg.png'
                    height={70}
                    width={120}
                    alt="logo"
                />
            </Link>
            <div className="w-1/2">
                <Search />
            </div>
            <div className="flex gap-8 items-center">
                {/* <ul className="flex gap-4 text-md lg:text-lg font-semibold">
                    <li className="tracking-wide hover:text-gray-500
                        transition duration-200 cursor-pointer">CANNABIS</li>
                    <li className="tracking-wide hover:text-gray-500
                        transition duration-200 cursor-pointer">HEMP</li>
                    <li className="tracking-wide hover:text-gray-500
                        transition duration-200 cursor-pointer">MERCH</li>
                    <li className="tracking-wide hover:text-gray-500
                        transition duration-200 cursor-pointer">OFFERS</li>
                    <li className="tracking-wide hover:text-gray-500
                        transition duration-200 cursor-pointer">STORE LOCATOR</li>
                </ul> */}
                <div className="flex gap-4 text-xl items-center">
                    <div className="border border-gray-300 text-gray-700 p-2 lg:px-6 lg:py-2 text-sm 
                    font-semibold rounded-full flex gap-2 items-center group
                    hover:bg-gray-200 hover:border-gray-200 
                    transition duration-200 cursor-pointer">
                        <FaUser className="text-lg" />
                        <span className="hidden lg:inline-block">My Account</span>
                    </div>
                    <FaShoppingCart className="hover:text-gray-700
                        transition duration-200 cursor-pointer" />
                </div>
            </div>
      </div>
      <Menu />
    </div>
    
  )
}

export default Nav
