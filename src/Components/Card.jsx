import React from 'react'

export default function Card() {
  return (
    <div className=' my-5 grid xl:grid-cols-3 max-sm:grid-cols-1 gap-5'>
      <div className='p-5 bg-[#E8E8E8] bg-cover rounded-3xl w-[400px]  h-[160px] flex justify-between flex-col'>
        <p></p>
        <p className=' text-[45px] text-black pb-2'>10 M+</p>
        <p className='text-xl font-medium text-black pb-2'>Happy Customers</p>
      </div>
      <div className='bg-[url("../../public/Assets/banner.jpg")] p-5 bg-cover rounded-3xl w-[400px] h-[160px]'>
        <p></p>
        <p className=' text-[45px] text-white pb-2'>12 K+</p>
        <p className=' text-xl font-medium text-white pb-2'>Elegant Properties</p>
      </div>
      <div className='bg-[#161616] bg-cover rounded-3xl w-[400px] h-[160px] p-5'>
        <p></p>
        <p className=' text-[45px] pb-2 text-white'>8+</p>
        <p className=' font-medium text-xl text-white pb-2'>Years Of Service</p>
      </div>
    </div>
  )
}
