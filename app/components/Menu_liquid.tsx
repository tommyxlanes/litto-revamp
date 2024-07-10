import { links } from '@/lib/data';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const Menu = () => {
  return (
    <div className="w-full h-12 flex justify-center items-center text-white">
      <ul className="flex gap-8 text-md lg:text-sm">
        {links.map((link, i) => (
          <Link href={`/${link.name}`}>
            <li
              key={i}
              className="flex items-center gap-2 tracking-widest hover:text-gray-300
                  transition duration-200 cursor-pointer uppercase">
              {/* {link.name} {link.name !== 'cannabis' || 'hemp' ? <FaChevronDown className='text-sm' /> : ''} */}
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
