import React from 'react'

export default function Middle() {
  return (
    <div className='mb-10'>
      <p className=' font-bold xl:text-3xl max-sm:text-2xl max-sm:font-semibold text-center my-10'>What we do</p>
      <div className='grid xl:grid-cols-4 gap-4'>
         <div className='bg-[url("../../public/Assets/propertymanagement.jpg")] bg-cover bg-center rounded-3xl sm:w-14 max-sm:h-52 xl:h-[600px] xl:w-full col-span-2' >
              <div className='bg-gradient-to-t from-zinc-800 p-7 rounded-3xl flex items-end xl:w-full xl:h-full
              max-sm:h-52 '>
                <div>
                <p className=' font-semibold text-white text-3xl pb-3 max-sm:text-lg '>Property Management</p>
                <p className=' font-medium text-white max-sm:text-sm '>We help landlords handle rental proper management</p>
                </div>
              </div>
         </div>
         <div className='bg-[url("../public/Assets/negotiation.jpg")] bg-cover rounded-3xl'>
          <div className='bg-gradient-to-t from-zinc-800 p-7 rounded-3xl flex items-end xl:w-full xl:h-full
          max-sm:h-52'>
            <div>
              <p className=' text-white font-semibold xl:text-2xl max-sm:text-base'>Negotiation & Offers</p>
            </div>
          </div>
         </div>
         <div className='bg-[url("../public/Assets/sale.jpg")] bg-cover rounded-3xl'>
          <div className='bg-gradient-to-t from-zinc-800 p-7 rounded-3xl flex items-end w-full h-full '>
            <p className=' xl:text-2xl max-sm:text-base text-white font-semibold'>Marketing & Advertising</p>
          </div>
         </div>
      </div>
    </div>
  )
}
