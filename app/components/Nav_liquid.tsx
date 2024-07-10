import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import Menu from './Menu_liquid';
import Search from './Search';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/lib/data';

const Nav = () => {
  return (
    <div className="hidden md:inline-block w-full flex-col justify-center absolute top-0 left-0">
      <div className="m-auto max-w-[1100px] py-4 flex items-center justify-between text-white">
        <Link href="/">
          <Image
            className="invert"
            src="/images/litto-logo-lg.png"
            height={30}
            width={80}
            objectFit="contain"
            alt="logo"
          />
        </Link>
        <ul className="flex gap-8 text-md lg:text-sm">
          {links.map((link, i) => (
            <Link href={`/${link.name}`}>
              <li
                key={i}
                className="flex items-center gap-2 tracking-widest hover:text-gray-500
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
              className="hover:text-gray-700
                        transition duration-200 cursor-pointer"
            />
            <FaShoppingCart
              className="hover:text-gray-700
                        transition duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
