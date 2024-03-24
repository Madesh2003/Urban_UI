import React from 'react';
import { CiSearch } from "react-icons/ci";


export default function Header() {
  return (
    <div className='bg-[url("../../public/Assets/banner.jpg")] bg-cover rounded-lg xl:w-full xl:h-[600px] p-10 text-white capitalize flex flex-col justify-between'>
        <div>
        <div className='xl:text-3xl max-sm:text-xl xl:font-bold max-sm:font-semibold '>
        <h1>discover your project</h1>
        <h1>property today</h1>
        </div>

        <div className='text-white mt-5 font-semibold xl:text-lg max-sm:text-xs '>
            <p>Real estate properties for sale and</p>
            <p>rent in over 12<sup>+</sup> countries</p>
        </div>
        </div>
       
       <div className='bg-white rounded-2xl p-5 mt-5 '>
            <div className='flex space-x-5 text-black font-semibold'>
                <p>Buy</p>
                <p>Rent</p>
            </div>
            <div className='flex justify-between items-center mt-3 space-x-5'>
                <div className='text-black'>
                    <p className=' xl:text-sm max-sm:text-xs mb-2'>Location</p>
                    <p className=' xl:text-lg max-sm:text-xs font-semibold'>New York City</p>
                </div>
                <div className='text-black'>
                    <p className=' xl:text-sm max-sm:text-xs mb-2'>Property Type</p>
                    <p className='xl:text-lg max-sm:text-xs font-semibold'>Duplex House</p>
                </div>
                <div className='text-black'>
                    <p className=' xl:text-sm max-sm:text-xs mb-2'>Price Range</p>
                    <p className='xl:text-lg max-sm:text-xs font-semibold'>11M - 15M</p>
                </div>
                <div>
                    <button className=' bg-black px-5 py-2 rounded-lg max-sm:text-[8px] '><CiSearch className=' inline-block items-center' /> Search</button>
                 </div>
            </div>
       </div>

    </div>
  )
}
