import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className="w-full bg-white h-10 md:border-[1px] md:border-gray-300 rounded-sm md:rounded-full flex justify-center lg:justify-between items-center">
        <input type="text" className="bg-white ml-4 h-8 w-full outline-none" placeholder="Search"/>
        <div className="bg-white mr-2 rounded-full h-6 w-6 flex items-center 
        justify-center">
            <FaSearch className="text-gray-400 hover:text-gray-500
            cursor-pointer transition duration-200" />
        </div>
    </div>
  )
}

export default Search
