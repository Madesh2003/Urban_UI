import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Featured() {
  return (
    <div className="my-10">
      <div className=" flex justify-between items-center mb-8">
        <p className=" xl:text-xl max-sm:text-lg font-medium">1/4</p>
        <p className="xl:text-3xl max-sm:text-xl max-sm:font-semibold xl:font-bold">Featured Listings</p>
        <div className="flex xl:text-2xl max-sm:text-lg font-medium space-x-5 hover:cursor-pointer">
          <FaRegArrowAltCircleLeft />
          <FaRegArrowAltCircleRight />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-2 gap-5 place-content-center">
        <div className='bg-[url("../../public/Assets/Featured1.jpg")] bg-cover border bg-center rounded-3xl  xl:w-[300px] xl:h-[400px] max-sm:h-56'>

          <div className=" bg-gradient-to-t from-zinc-800 rounded-3xl p-5 h-full grid grid-cols-1 place-content-between">
            <div className="flex justify-end ">
            <p className="text-black max-sm:text-xs xl:text-sm bg-white px-3 py-1 border-black border rounded-full text-center font-semibold">For Sale</p>
            </div>
            <p className=" xl:text-xl max-sm:text-base font-medium text-white">The Domain</p>
          </div>
        </div>
        <div className='bg-[url("../../public/Assets/Featured2.jpg")] bg-cover border bg-center rounded-3xl xl:w-[300px] xl:h-[400px] max-sm:h-56'>
            <div className="bg-gradient-to-t from-zinc-800 w-full h-full rounded-3xl p-5 grid grid-cols-1 place-content-between ">
                    <div className="w-full flex justify-end">
                    <p className="bg-white rounded-full py-1 px-3 border-black border font-semibold max-sm:text-xs xl:text-sm" >For Sale</p>
                    </div>
                    <p className=" text-white font-semibold xl:text-2xl max-sm:text-base ">Gray Home</p>
            </div>
        </div>
        <div className='bg-[url("../../public/Assets/Featured3.jpg")] bg-cover border bg-center rounded-3xl xl:w-[300px] xl:h-[400px] max-sm:h-56'>
        <div className="bg-gradient-to-t from-zinc-800 w-full h-full rounded-3xl p-5 grid grid-cols-1 place-content-between ">
                    <div className="w-full flex justify-end">
                    <p className="bg-white rounded-full py-1 px-3 border-black border font-semibold xl:text-sm max-sm:text-xs" >Rental</p>
                    </div>
                    <p className=" text-white font-semibold xl:text-2xl max-sm:text-base">Space Hub</p>
            </div>
        </div>
        <div className='bg-[url("../../public/Assets/Featured4.jpg")] bg-cover border bg-center rounded-3xl xl:w-[300px] xl:h-[400px] max-sm:h-56'>
        <div className="bg-gradient-to-t from-zinc-800 w-full h-full rounded-3xl p-5 grid grid-cols-1 place-content-between ">
                    <div className="w-full flex justify-end">
                    <p className="bg-white rounded-full py-1 px-3 border-black border font-semibold max-sm:text-xs xl:text-sm" >Rental</p>
                    </div>
                    <p className=" text-white font-semibold max-sm:text-base xl:text-2xl">Glassy Domain</p>
            </div>
        </div>
      </div>
    </div>
  );
}
