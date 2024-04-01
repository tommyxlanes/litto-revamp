import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className="w-full bg-gray-200 h-10 rounded-sm md:rounded-full flex justify-center lg:justify-between items-center">
        <input type="text" className="bg-gray-200 ml-4 h-8 w-full outline-none" placeholder="Search"/>
        <div className="bg-gray-200 mr-2 rounded-full h-6 w-6 flex items-center 
        justify-center">
            <FaSearch className="text-gray-400 hover:text-gray-500
            cursor-pointer transition duration-200" />
        </div>
    </div>
  )
}

export default Search
