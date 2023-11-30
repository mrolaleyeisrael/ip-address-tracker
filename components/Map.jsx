'use client'
import React, { useContext } from 'react'

import L from 'leaflet'
import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'
import { UserLocation } from '@/context/UserLocationContext'

const Map = () => {

  const { coord } = useContext(UserLocation)
  console.log(coord)

  return (
    <div className=' h-full '>
      {coord ?

        (<MapContainer style={{
          height: '100vh',
          width: '100vw'
        }} center={coord} zoom={13} scrollWheelZoom={false} className=' absolute z-10' >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          } position={coord}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>) : (
          <div className=' h-full justify-center items-center text-2xl ' >
            <p  >Loading...</p>
          </div>)
      }


    </div>
  )
}

export default Map