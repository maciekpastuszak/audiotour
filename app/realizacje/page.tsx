
import React from 'react'
import IconCarousel from '@/components/IconCarousel'
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar'
import PortfolioCard from '@/components/PortfolioCard';
import { Prisma, PrismaClient } from '@prisma/client';
import PortfolioGrid from '@/components/PortfolioGrid';

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  link: string;
}

interface PortfolioItemCard {
  name: string | null;
  description: string | null;
}

type PortfolioItem = {
  real_latitude: Prisma.Decimal | null;
  real_longitude: Prisma.Decimal | null;
  name: string | null;
  link: string | null;
};

const prisma = new PrismaClient();

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

export default async function Realizacje() {

  const portfolioItemsCards = await prisma.portfolio.findMany({
    where: {
      display: 1,  // Assuming 'display' indicates whether the portfolio item should be shown
    },
    select: {
      name: true,
      description: true,
      // Add any other fields that might be needed for bgImg, tourIcon, etc.
    },
  });

  const cards = portfolioItemsCards.map((item: PortfolioItemCard) => ({
    bgImg: '', 
    bgImgAlt: item.name || '',
    tourIcon: '',
    tourIconAlt: '',
    title: item.name || '',
    subtitle1: '', 
    subtitle2: '',
    desc: item.description ? item.description.slice(0, 200) : '',
  }));

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

  const markers = portfolioItems.map((item: PortfolioItem) => ({
    lat: item.real_latitude?.toNumber() || 0, // Ensure these are numbers
    lng: item.real_longitude?.toNumber() || 0,
    name: item.name || 'Unknown',
    link: item.link || '#',
  }));

 
  return (
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

        <h2 className='text-lg font-bold mt-4'>Zaufali nam:</h2>
        <p className='text-sm text-slate-600 mb-5 text-center'>Współpracowaliśmy z ponad 200 instytucjami z Polski i Europy</p>

        <div className='flex w-full mx-auto justify-center bg-white'>
          <div className='w-4/5'>
          <IconCarousel />
          </div>
        </div>

        <h2 className='text-lg font-bold mt-4'>Ostatnie realizacje</h2>
        <p className='text-sm text-slate-600 mb-5'>Projekty które zrealizowaliśmy w ostanim czasie</p>

        {/* <PortfolioCard 
          bgImg='/img/portfolio/heroes/10a.jpg' 
          bgImgAlt='zamek'
          tourIcon='/img/app-icons/Szlak_Marianny_Oranskiej.png'
          tourIconAlt='Ikona realizacji'
          title='Szlak Marianny Orańskiej'
          subtitle1='Kamieniec Ząbkowski'
          subtitle2='Styczeń 2023'
          desc='Audioprzewodnik umożliwiający zwiedzanie gmin Kamieniec Ząbkowski i innych w formie audioprzewodnika multimedialnego.'
        /> */}

      <PortfolioGrid cards={cards} />
        
      </section>
  );
}
