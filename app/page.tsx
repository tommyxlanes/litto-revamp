import Image from 'next/image';
import Carousel from './components/Carousel';
import MobileCarousel from './components/ModileCarousel';
import Footer from './components/Footer';
import { cannabis, hemp, merch, products } from '@/lib/data';
import Link from 'next/link';

import Video from 'next-video';
import heroVid from '@/videos/hero-vid.mp4';

import slugify from 'slugify';

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full">
        <div className="w-full h-[60vh] overflow-hidden bg-gray-100">
          <video
            width="100%"
            height="100%"
            controls
            preload="none"
            autoPlay
            loop
            muted>
            <source
              src="https://res.cloudinary.com/dehmmknu8/video/upload/v1721100318/my-uploads/liaztbzilpszy2uasotr.mp4"
              type="video/mp4"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 px-24">
          <div className="aspect-video bg-gray-100 relative">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">CANNABIS</h3>
              <p className="text-xs">California, Oklahoma</p>
              <Link href="/cannabis">
                <button
                  className="border border-1 border-white px-8 
            py-[14px] text-sm text-gray-50 mt-4 hover:bg-white hover:text-black transition duration-200">
                  SHOP
                </button>
              </Link>
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
              <Link href="/cannabis">
                <button
                  className="border border-1 border-white px-8 hover:bg-white hover:text-black transition duration-200
            py-[14px] text-sm text-gray-50 mt-4">
                  SHOP
                </button>
              </Link>
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
              <Link href="/cannabis">
                <button
                  className="border border-1 border-white px-8 hover:bg-white hover:text-black transition duration-200 
            py-[14px] text-sm text-gray-50 mt-4">
                  SHOP
                </button>
              </Link>
            </div>
            <Image
              width={600}
              height={500}
              objectFit="cover"
              alt="Vape 1"
              src="https://images.unsplash.com/photo-1542820060-a56821e07e6a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          {/* <div className="grid grid-cols-3 h-[400px] overflow-hidden">
            <div className="col-span-3 bg-red-200">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                src="https://images.unsplash.com/photo-1536513601554-036f2a55c7fd?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vape-100"
              />
            </div>
          </div> */}
          {/* <div className="aspect-video bg-gray-100 relative">
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
          </div> */}
        </div>

        <div className="grid grid-cols-3 gap-4 pb-6 px-24 h-[auto]">
          <div className="col-span-3 overflow-hidden relative">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">LITTO</h3>
              <p className="text-xs">TAKE A HIT ANYWHERE AND ANYTIME</p>
              <Link href="/cannabis">
                <button
                  className="border border-1 border-white px-8 hover:bg-white hover:text-black transition duration-200 
            py-[14px] text-sm text-gray-50 mt-4">
                  SHOP ALL
                </button>
              </Link>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              src="/images/cannabis-header.jpg"
              // src="https://images.unsplash.com/photo-1529567591152-9abba27ab13b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="vape-100"
              className="object-fit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
