import Image from 'next/image'
import React from 'react'

type Props = {
    item: {
        name: string,
        type: string,
        image: string,
        strain: string,
        mood: string
        flavors: string
    }
}

const Cannabis = ({ item }: Props) => {
  return (
    <div>
        <Image 
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p className="uppercase text-gray-900 font-semibold
                text-sm">{item.name}</p>
    </div>
  )
}

export default Cannabis
