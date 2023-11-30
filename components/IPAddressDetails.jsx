import React from 'react'
import Image from 'next/image'

const IPAddressDetails = () => {
  return (
    <div className=' relative z-50 md:-mb-40  '>

      <Image src={'/../bgmobile.png'} alt='Background Image' width={1000} height={500} className=' absolute  object-cover h-full w-full ' />


      <div className=' px-4 md:px-44 relative md:-bottom-16 '>

        <div className=' mb-5 '>
          <p className=' text-3xl text-white font-bold text-center '>IP Address Tracker</p>
        </div>

        <div className='  w-full '  >
          <div className=' w-full h-full flex items-center'>
            <input type="text" placeholder='Search for any IP address or domain INdependence' className=' py-4 pl-4 rounded-l-xl grow outline-none' />
            <button className=' bg-black text-white py-4 px-4 rounded-r-xl grow-0 shrink-0 '>
              <Image src={'/../icon-arrow.svg'} alt='Search Icon' className=' h-full  ' width={20} height={20} />
            </button>
          </div>

        <div className=' bg-white rounded-xl mt-10 text-center md:text-left flex flex-col md:flex-row p-6 gap-4 justify-center shadow-sm '>
          
          <div className=' md:border-r-2 border-r-gray-300 md:p-5 ' >
            <p className=' text-[#aaa] font-bold text-xs md:text-sm '>IP ADDRESS</p>
            <h2 className=' font-bold text-[18px] md:text-2xl'>192.168.83.98</h2>
          </div>
            <div className=' md:border-r-2 border-r-gray-300 md:p-5 ' >
              <p className=' text-[#aaa] font-bold text-xs md:text-sm '>IP ADDRESS</p>
              <h2 className=' font-bold text-[18px] md:text-2xl'>192.168.83.98</h2>
            </div> <div className=' md:border-r-2 border-r-gray-300 md:p-5 ' >
              <p className=' text-[#aaa] font-bold text-xs md:text-sm '>IP ADDRESS</p>
              <h2 className=' font-bold text-[18px] md:text-2xl'>192.168.83.98</h2>
            </div> <div className=' md:border-r-2 border-r-gray-300 md:p-5 ' >
              <p className=' text-[#aaa] font-bold text-xs md:text-sm '>IP ADDRESS</p>
              <h2 className=' font-bold text-[18px] md:text-2xl'>192.168.83.98</h2>
            </div>
         
        </div>
      </div>
        </div>

    </div>
  )
}

export default IPAddressDetails