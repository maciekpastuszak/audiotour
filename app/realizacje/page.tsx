
import MapComponent from '@/components/MapComponent'
import Navbar from '@/components/Navbar'
import { PrismaClient } from '@prisma/client';
import React from 'react'

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  link: string;
}
const prisma = new PrismaClient();

export default async function Realizacje() {

  const portfolioItems = await prisma.portfolio.findMany({
    where: {
      display_on_map: 1,
    },
    select: {
      real_latitude: true,
      real_longitude: true,
      name: true,
      link: true,
    },
  });

  const markers = portfolioItems.map((item) => ({
    lat: item.real_latitude?.toNumber() || 0, // Ensure these are numbers
    lng: item.real_longitude?.toNumber() || 0,
    name: item.name || 'Unknown',
    link: item.link || '#',
  }));

 
  return (
    <>
      <Navbar />
      <section id='hero' className='w-full flex flex-col justify-center items-center bg-gray-200'>
        <div className='flex justify-center bg-[url("/img/promo2.jpg")]'>
          <div className='flex flex-col md:flex-row md:w-4/5 my-5'>
            <div className='flex flex-col justify-center pb-2 md:my-20 ps-3 bg-white shadow-lg rounded-l-md'>
              <h1 className='text-2xl font-bold p-2'>Realizacje</h1>
              <p className='p-2'>
                Na mapie poniżej znajdziesz wszystkie nasze dotychczasowe realizacje. Kliknij niebieską ikonę lokalizacji aby wyszukać obiekty/wycieczki w swojej okolicy.
              </p>
            </div>
            <div className='shadow-lg'>
                <MapComponent markers={markers} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
