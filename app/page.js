'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import IPAddressDetails from '@/components/IPAddressDetails'
import Map from '@/components/Map'
import { useContext } from 'react'
import { UserLocation } from '@/context/UserLocationContext'

export default function Home() {

  return (
    <div className=' h-screen '>
      <div className=' h-[20vh] md:h-[20vh] bg-white z-10 '>
        <IPAddressDetails />
      </div>

      <div className=' -z-20 h-[80vh] md:h-[80vh] '>
        <Map />
      </div>
    </div>
  )
}
