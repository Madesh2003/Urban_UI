import React from 'react';
import { GoDotFill } from "react-icons/go";


export default function Navbar() {
  return (
    <div className='flex justify-between flex-wrap mx-10 my-8'>
      <div>
        <p className='capitalize font-semibold text-xl'>urban<sup className=''><GoDotFill className=' inline-block text-lg' /></sup></p>
      </div>
      <div>
        <ul className=' capitalize flex flex-wrap space-x-16 max-sm:hidden xl:visible '>
      <li className=' hover:font-semibold left-1/2 border border-gray-400 w-1/12 h-0'>home</li>
      <li>services</li>
      <li>property</li>
      <li>contact</li>
      </ul>
      </div>
      <div className='space-x-6'>
        <button>Login</button>
        <button className='bg-black text-white py-1 px-4 rounded-xl'>Sign up</button>
      </div>
    </div>
  )
}
