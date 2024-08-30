
import React from 'react'
import IconCarousel from '@/components/IconCarousel'
import dynamic from 'next/dynamic';
import { PrismaClient } from '@prisma/client';
import PortfolioGrid from '@/components/PortfolioGrid';
import { Decimal } from '@prisma/client/runtime/library';
import ReviewCard from '@/components/ReviewCard';

interface PortfolioItemCard {
  name: string | null;
  description: string | null;
  uid: number;
}

type PortfolioItem = {
  real_latitude: Decimal | null;
  real_longitude: Decimal | null;
  name: string | null;
  link: string | null;
  lead: string | null;
};

const prisma = new PrismaClient();

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

export default async function Realizacje() {

  const portfolioItemsCards = await prisma.portfolio.findMany({
    where: {
      display: 1, 
    },
    select: {
      uid: true,
      name: true,
      description: true,
    },
  });

  const cards = portfolioItemsCards.map((item: PortfolioItemCard) => ({
    id: item.uid,
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
      lead: true,
    },
  });

  const markers = portfolioItems.map((item: PortfolioItem) => ({
    lat: item.real_latitude?.toNumber() || 0, // Ensure these are numbers
    lng: item.real_longitude?.toNumber() || 0,
    name: item.name || 'Nieznany',
    link: item.link || '#',
    lead: item.lead || 'Nieznany'
  }));

 
  return (
      <section id='hero' className='w-full flex flex-col justify-center items-center bg-gray-200 pb-3'>
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

      <div className='flex flex-col justify-center w-5/6'>
        <h2 className='text-lg font-bold text-center'>Opinie klientów i turystów:</h2>
        <p className='text-sm text-slate-600 mb-5 mx-5 text-center'>Audioprzewodnik to audioprzewodnik, który oprowadzi Państwa w multimedialny sposób po multimedialnym mieście Kraków.</p>
      </div>
        

      <div className='w-[350px]'>
          <div className='flex justify-start'>
            <ReviewCard 
            name='Jan Przewodnicki'
            isImgLeft={true}
            profilePic='/img/man_smiling.jpg' 
            place='Wrocław pamięta - App Store' 
            desc='Piękna aplikacja z bardzo ładnymi kolorami. Super ułatwieniedla osoób niepełnosprawnych!'
            rating='5' />
          </div>
          <div className='flex justify-end'>
            <ReviewCard 
            name='Zofia Wycieczkowska'
            isImgLeft={false}
            profilePic='/img/woman_smiling.png' 
            place='ICHOT - Brama Poznania' 
            desc='Poruszająca wycieczka po Ostrowie Tumskim'
            rating='4.9' />
          </div>
          <div>
            <ReviewCard 
            name='Jan Przewodnicki'
            isImgLeft={true}
            profilePic='/img/man_smiling.jpg' 
            place='Wrocław pamięta - App Store' 
            desc='Piękna aplikacja z bardzo ładnymi kolorami. Super ułatwieniedla osoób niepełnosprawnych!'
            rating='5' />
          </div>
        </div>
        
      </section>
  );
}
