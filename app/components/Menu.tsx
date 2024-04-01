import { links } from '@/lib/data'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

const Menu = () => {
  return (
    <div className='bg-[#080808] w-full h-12 flex justify-center items-center text-white'>
      <ul className="flex gap-12 text-md lg:text-lg">
        {
          links.map((link, i) => (
            <Link href={`/${link.name}`}>
              <li key={i} className="flex items-center gap-2 tracking-widest hover:text-gray-300
                  transition duration-200 cursor-pointer uppercase">
                    {/* {link.name} {link.name !== 'cannabis' || 'hemp' ? <FaChevronDown className='text-sm' /> : ''} */}
                  
                    {link.name} {link.name === 'cannabis' && (<FaChevronDown className='text-sm' />)}
              </li>
            </Link>
          ))
        }
            {/* <li className="flex items-center gap-2 tracking-widest hover:text-gray-300
                transition duration-200 cursor-pointer">
                    CANNABIS <FaChevronDown className='text-sm' /></li>
            <li className="flex items-center gap-2 tracking-wide hover:text-gray-300
                transition duration-200 cursor-pointer">
                    HEMP <FaChevronDown className='text-sm' /></li>
            <li className="tracking-wide hover:text-gray-300
                transition duration-200 cursor-pointer">MERCH</li>
            <li className="tracking-wide hover:text-gray-300
                transition duration-200 cursor-pointer">OFFERS</li>
            <li className="tracking-wide hover:text-gray-300
                transition duration-200 cursor-pointer">STORE LOCATOR</li> */}
        </ul>
    </div>
  )
}

export default Menu
