'use client';

import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import Menu from './Menu_liquid';
import Search from './Search';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/lib/data';
import { usePathname } from 'next/navigation';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

const Nav = () => {
  const pathname = usePathname();

  console.log(typeof pathname);

  return (
    <div
      className={`hidden md:inline-block w-full flex-col justify-center absolute top-0 left-0 z-10 bg ${bebas.className}`}>
      <div
        className={`m-auto px-24 py-4 flex items-center justify-between ${
          pathname === '/cannabis' ? 'text-[#101010]' : 'text-white'
        }`}>
        <Link href="/">
          <Image
            className={`${pathname === '/cannabis' ? '' : 'invert'}`}
            src="/images/litto-logo-lg.png"
            height={30}
            width={80}
            objectFit="contain"
            alt="logo"
          />
        </Link>
        <ul className="flex gap-4 text-md lg:text-lg">
          {links.map((link, i) => (
            <Link key={i} href={`${link.url}`}>
              <li
                key={i}
                className="flex items-center gap-2 tracking-widest hover:text-[#666]
                  transition duration-200 cursor-pointer uppercase">
                {/* {link.name} {link.name !== 'cannabis' || 'hemp' ? <FaChevronDown className='text-sm' /> : ''} */}
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 text-xl items-center">
            <FaUser
              className="hover:text-gray-300
                        transition duration-200 cursor-pointer"
            />
            <FaShoppingCart
              className="hover:text-gray-300
                        transition duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
