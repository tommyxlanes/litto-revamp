import { cannabis } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'
import CannabisDetail from './CannabisDetail'
import Cannabis from './Cannabis'

const CannabisList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cannabis.map((item, i) => (
            <Link 
              href={`/cannabis/${slugify(item.name)}`}
              className="flex flex-col items-center group cursor-pointer ">
              <Cannabis item={item} />
              {/* <Image 
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p className="uppercase text-gray-900 font-semibold
                text-sm">{item.name}</p> */}
            </Link>
          ))}
        </div>
  )
}

export default CannabisList
