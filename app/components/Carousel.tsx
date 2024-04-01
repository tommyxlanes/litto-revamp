'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import Image from 'next/image'

import { images } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { delay } from 'framer-motion'

const Carousel = () => {

  return (
    <div className='container p-0'>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className='w-full text-white relative'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='flex h-full w-full items-center justify-self-center'>
              <Image
                src={image.src}
                alt={image.alt}
                className='block h-full w-full object-cover'
              />
            </div>
          </SwiperSlide>
        ))}

      <div className='top-[50%] -translate-y-[50%] absolute z-10 button-prev-slide w-12 h-12
        left-0'>
        <FaChevronLeft className='text-gray-200 opacity-60 
          hover:opacity-80 text-4xl cursor-pointer transition duration-200
          hover:text-gray-200' />
      </div>
      <div className='top-[50%] -translate-y-[50%] absolute z-10 button-next-slide w-12 h-12
      right-0'>
        <FaChevronRight className='text-gray-200 opacity-60 
          hover:opacity-80 text-4xl cursor-pointer transition duration-200
          hover:text-gray-200' />
      </div>
      <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  )
}

export default Carousel
