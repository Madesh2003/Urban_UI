import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Clients() {
  return (
    <div className="my-20">
      <div className="flex justify-between space-x-5 items-center mb-8">
        <p className=" xl:text-xl max-sm:text-lg font-medium">1/4</p>
        <p className="xl:text-3xl max-sm:text-2xl max-sm:font-semibold xl:font-bold">What our clients say</p>
        <div className="flex xl:text-2xl max-sm:text-lg font-medium space-x-5 hover:cursor-pointer">
          <FaRegArrowAltCircleLeft />
          <FaRegArrowAltCircleRight />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-2 place-content-center gap-5">
        <div className='bg-[url("../../public/Assets/Client1.jpg")] bg-cover border bg-center rounded-3xl max-sm:h-60 xl:w-[300px] xl:h-[400px]'>
          <div className=" bg-gradient-to-t from-zinc-800 rounded-3xl p-5 h-full flex items-end">
           <div className="space-y-1">
           <p className=" max-sm:text-xl xl:text-2xl font-semibold text-white">Fernen</p>
           <p className=" xl:text-lg max-sm:text-base text-white">Businessman</p>
           </div>
          </div>
        </div>
        <div className='bg-[url("../../public/Assets/Client2.jpg")] bg-cover border bg-center rounded-3xl max-sm:h-60 xl:w-[300px] xl:h-[400px]'>
          <div className="bg-gradient-to-t from-zinc-800 w-full h-full rounded-3xl p-5 flex items-end ">
          <div className="space-y-1">
           <p className=" xl:text-2xl max-sm:text-xl font-semibold text-white">Jenny Buckler</p>
           <p className=" xl:text-lg max-sm:text-base text-white">Doctor</p>
           </div>
          </div>
        </div>
        <div className='bg-[url("../../public/Assets/Client3.jpg")] bg-cover border bg-center rounded-3xl max-sm:h-60 xl:w-[300px] xl:h-[400px]'>
          <div className="bg-gradient-to-t from-zinc-800 w-full h-full rounded-3xl p-5 flex items-end ">
          <div className="space-y-1">
           <p className=" xl:text-2xl max-sm:text-xl font-semibold text-white">Jeremiah Graff</p>
           <p className=" xl:text-lg max-sm:text-base text-white">Professor</p>
           </div>
          </div>
        </div>
        <div className='bg-[url("../../public/Assets/Client4.jpg")] bg-cover border bg-center rounded-3xl max-sm:h-60 xl:w-[300px] xl:h-[400px]'>
          <div className="bg-gradient-to-t from-zinc-800 w-full h-full rounded-3xl p-5 flex items-end ">
          <div className="space-y-1">
           <p className=" xl:text-2xl max-sm:text-xl font-semibold text-white">Smith</p>
           <p className=" xl:text-lg max-sm:text-base text-white">Businessman</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
