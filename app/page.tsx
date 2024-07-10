import Image from 'next/image';
import Carousel from './components/Carousel';
import MobileCarousel from './components/ModileCarousel';
import Footer from './components/Footer';
import { cannabis, hemp, merch, products } from '@/lib/data';
import Link from 'next/link';

import slugify from 'slugify';

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full">
        <div className="w-full h-[60vh] bg-gray-100">
          <iframe
            src="https://www.youtube.com/embed/7GFzZ6v3Jsg?si=HLFvUWl-qNpWexWj"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 px-24">
          <div className="aspect-video bg-gray-100 relative">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">CANNABIS</h3>
              <p className="text-xs">California, Oklahoma</p>
              <button
                className="border border-1 border-white px-8 
            py-[14px] text-sm text-gray-50 mt-4 hover:bg-white hover:text-black transition duration-200">
                SHOP ALL
              </button>
            </div>
            <Image
              width={600}
              height={500}
              objectFit="cover"
              alt="Vape 1"
              src="https://images.unsplash.com/photo-1533703048590-f315a00c8e38?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="aspect-video bg-gray-100 relative">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">HEMP</h3>
              <p className="text-xs">Pens, Prerolls</p>
              <button
                className="border border-1 border-white px-8 hover:bg-white hover:text-black transition duration-200
            py-[14px] text-sm text-gray-50 mt-4">
                SHOP ALL
              </button>
            </div>
            <Image
              width={600}
              height={500}
              objectFit="cover"
              alt="Vape 1"
              src="https://images.unsplash.com/photo-1606753113192-59011d2dad85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="aspect-video bg-gray-100 relative">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">MERCH</h3>
              <p className="text-xs">Hoodies, T-Shirts, Accessories</p>
              <button
                className="border border-1 border-white px-8 hover:bg-white hover:text-black transition duration-200 
            py-[14px] text-sm text-gray-50 mt-4">
                SHOP ALL
              </button>
            </div>
            <Image
              width={600}
              height={500}
              objectFit="cover"
              alt="Vape 1"
              src="https://images.unsplash.com/photo-1542820060-a56821e07e6a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          {/* <iframe
            className="w-full aspect-video"
            src="https://v.ftcdn.net/07/47/95/46/700_F_747954690_7F4l1rqHrRnMbfnaVS0h1vTWCSO03liI_ST.mp4"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <iframe
            className="w-full aspect-video"
            src="https://v.ftcdn.net/01/98/06/26/700_F_198062627_IblROpVdRytkEOxXnuIBHreO5XTr8gaH_ST.mp4"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <iframe
            className="w-full aspect-video"
            src="https://v.ftcdn.net/05/95/32/90/700_F_595329043_Yy7QuY5eUIQcNoKd78F9N44cWznJYNYx_ST.mp4"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe> */}
        </div>
      </section>
      <section className="h-screen"></section>
      {/* <section>
        <div className="mt-6 mb-12 border-b-[1px] border-gray-300">
          <h3 className="uppercase m-auto text-green-500 font-semibold w-fit rounded-lg text-2xl px-4 py-2">
            Cannabis
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cannabis.map((item, i) => (
            <Link
              href={`/cannabis/${slugify(item.name)}`}
              className="flex flex-col items-center group cursor-pointer ">
              <Image
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p
                className="uppercase text-gray-900 font-semibold
                text-sm">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="mt-6 mb-12 border-b-[1px] border-gray-300 ">
          <h3 className="uppercase m-auto text-green-500 font-semibold w-fit rounded-lg text-2xl px-4 py-2">
            hemp
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {hemp.map((item, i) => (
            <Link
              href={`/hemp/${slugify(item.name)}`}
              className="flex flex-col items-center group cursor-pointer ">
              <Image
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p
                className="uppercase text-gray-900 font-semibold
                text-sm">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 mb-12">
        <div className="mt-6 mb-12 border-b-[1px] border-gray-300 ">
          <h3 className="uppercase m-auto text-green-500 font-semibold w-fit rounded-lg text-2xl px-4 py-2">
            Merch
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {merch.map((item, i) => (
            <Link
              href={`/merch/${slugify(item.name)}`}
              className="flex flex-col items-center group cursor-pointer ">
              <Image
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p
                className="uppercase text-gray-900 font-semibold
                text-sm">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </section> */}
    </main>
  );
}
