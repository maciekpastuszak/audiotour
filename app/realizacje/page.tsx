"use client"

import MapComponent from '@/components/MapComponent'
import Navbar from '@/components/Navbar'
import { markers } from '@/constants'
import { PrismaClient } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const prisma = new PrismaClient();

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  link: string;
}

interface RealizacjeProps {
  markers: MarkerData[];
}

const Realizacje: React.FC<RealizacjeProps> = ({ markers }) => {
  // const [markers, setMarkers] = useState<MarkerData[]>([]);

  // useEffect(() => {

  //   // Fetch the data from the Portfolio table
  //   const fetchMarkers = async () => {
  //     try {
  //       const portfolioItems = await prisma.portfolio.findMany({
  //         where: { display_on_map: 1 },
  //         select: {
  //           real_latitude: true,
  //           real_longitude: true,
  //           name: true,
  //           link: true,
  //         },
  //       });

  //       // Map the data into the format expected by the MapComponent
  //       const markersData: MarkerData[] = portfolioItems.map((item) => ({
  //         lat: item.real_latitude?.toNumber() || 0,
  //         lng: item.real_longitude?.toNumber() || 0,
  //         name: item.name || 'Unknown',
  //         link: item.link || '#',
  //       }));

  //       setMarkers(markersData);
  //     } catch (error) {
  //       console.error('Error fetching markers:', error);
  //     }
  //   };

  //   fetchMarkers();
  // }, []);


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