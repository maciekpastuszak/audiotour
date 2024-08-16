"use client"

import MapComponent from '@/components/MapComponent'
import Navbar from '@/components/Navbar'
import { markers } from '@/constants'
import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Realizacje = () => {
  
  return (
    <>
    <Navbar />
    <section id='hero' className='w-full flex flex-col justify-center items-center bg-gray-200'>
       <div className='flex flex-col md:flex-row md:w-4/5 my-5'>
        <div className='flex flex-col justify-center md:my-20 bg-white'>
          <h1 className='text-2xl font-bold p-2'>Realizacje</h1>
          <p className='p-2'>Na mapie poniżej znajdziesz wszystkie nasze dotychczasowe realizacje. Kliknij niebieską ikonę lokalizacji aby wyszukać obiekty/wycieczki w swojej okolicy.</p>
        </div>
        <div className='shadow-lg'>
            <MapComponent markers={markers} />
        </div>
       </div>
    </section>
    </>
  )
}

export default Realizacje