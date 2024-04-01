'use client'

import Selector from '@/app/components/Selector'
import { products } from '@/lib/data'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { PiPlant } from "react-icons/pi";
import { FaEyeDropper } from "react-icons/fa6";
import { PiMaskHappyLight } from "react-icons/pi";
import { useState } from 'react'

type Props = {
    params: {
      id: string
    }
}

const page = ({ params }: Props) => {
   const [active, setActive] =  useState('MED')

  const item = products.find(item => {
    if(item.slug === params.id) return item
  })

  if(!item) return 

  const sizes = ['SM', 'MED', 'LRG', 'XL']

  return (
    <div className="m-auto max-w-[1080px] flex flex-col px-24">
      <div className="mt-16 p-8 grid grid-cols-2 gap-8 justify-center">
        <div>
          <Image 
            src={`/images${item.image}`}
            height={600}
            width={300}
            alt={item.slug}
            />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
            <h3 className='font-semibold text-3xl text-gray-900'>{item.name}</h3>

            <div className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                    {
                        sizes.map(size => {
                            const isActive = size === active
    
                            return <div 
                            onClick={() => setActive(size)}
                            className={`${isActive ? "text-gray-200" : "text-gray-600"} flex items-center justify-center 
                            h-12 w-12 ${isActive ? "bg-gray-800": "bg-gray-200"} rounded-full hover:bg-gray-300
                            cursor-pointer transition duration-20`}>
                                {size}
                            </div>
                        })
                    }
                </div>
                <div className='flex gap-2'>
                    <Selector /> <button className=' px-4 rounded-lg bg-green-600 text-white'>Add To Cart</button>
                </div>
            </div>

            <div className='mt-8 flex flex-col gap-4'>
              <div>
                
                <p className='text-gray-500 mb-8'>
                    Join the club with a LITTO Blinkers Club Hoodie. Available in the classic Black with White print. Designed with comfort and versatility in mind, each hoodie is lined with fleece for added warmth. Whether you’re going for a relaxed fit or out & about, the LITTO Blinkers Club has you covered with style and comfort.
                </p>

                <p className='text-gray-500'>
                    8.25 oz. 80% ring-spun cotton, 10% polyester, 10% recycled polyester
                    Screen printed front and tag.
                </p>
              </div>

              
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
