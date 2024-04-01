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

const CannabisDetail = ({ item }: Props) => {
  return (
    <div>
      {item.name}
    </div>
  )
}

export default CannabisDetail
