'use client'
import React, { useContext } from 'react'
import { Grid } from 'react-loader-spinner'



import { useState } from 'react'
import { UserLocation } from '@/context/UserLocationContext'


import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';


const containerStyle = {
  width: '100vw',
  height: '80vh',
};

const center = {
  lat: 7.50634,
  lng: 4.539086,
};

const Map = () => {

  const { coord } = useContext(UserLocation)
  console.log(coord)


  const renderMap = () => {
    return (
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} mapIds={['24f7ccecda4d78e7']}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={{ mapId: '24f7ccecda4d78e7', gestureHandling: 'greedy' }} center={coord} zoom={15} 
        >
          <MarkerF
            key={coord.lat}
            position={coord}
            icon={{
              url: '/icon-location.svg',
              scaledSize: {
                width: 30,
                height: 40,
              },
            }}
          />
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div className=' h-full '>
      {coord ?

        (
          renderMap()

        ) : (
          <div className=' flex h-[80vh] justify-center items-center text-2xl ' >
            <Grid
              height="80"
              width="80"
              color="#ba84d7"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>)
      }


    </div>
  )
}

export default Map