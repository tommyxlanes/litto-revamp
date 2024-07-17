import React from 'react';
import { products } from '@/lib/data';
import Image from 'next/image';

import { Bebas_Neue } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

const page = () => {
  return (
    <div className="mt-32 w-full min-h-screen flex flex-col items-center justify-center text-2xl">
      <div
        className={`min-w-[1200px] p-2 border-t border-b border-[#cecece] text-[18px] ${bebas.className} flex justify-center
        mb-12`}>
        <ul className="flex gap-4">
          <li className="relative before:absolute before:top-[123%] before:w-[100%] before:h-[3px] before:bg-[#101010] ">
            ORIGINAL
          </li>
          <li>EXOTIC</li>
          <li>LIVE RESIN</li>
        </ul>
      </div>
      <div className="min-w-[1200px]">
        <h3 className={`${bebas.className} text-5xl text-[#101010]`}>
          CANNABIS
        </h3>
      </div>
      <div className="min-w-[1200px] grid grid-cols-4 gap-x-4 gap-y-12 row-ga my-10">
        {products.map((item) => (
          <div>
            <div key={item.name} className=" bg-gray-100 p-4">
              <Image
                width={250}
                height={400}
                src={`/images${item.image}`}
                alt={item.name}
              />
            </div>
            <div className="mt-2">
              <p className={`${roboto.className} uppercase text-sm font-[400]`}>
                {item.name}
              </p>
              {/* <p className="font-[500] text-lg text-[#101010] ">FIND IN STORE</p> */}
              <a
                href="#_"
                className="relative inline-block px-4 py-2 text-xs font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  SHOP IN STORE
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
