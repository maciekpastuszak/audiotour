import AppFunctionCard from '@/components/AppFunctionCard'
import AppBannerBlue from '@/components/AppBannerBlue'
import AppBannerGreen from '@/components/AppBannerGreen'
import AppBannerOrange from '@/components/AppBannerOrange'
import IconCarousel from '@/components/IconCarousel'
import FavouriteAppCard from '@/components/FavouriteAppCard'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { featureCardsBlue, featureCardsGreen, favouriteAppsCard } from '@/constants'
import Image from 'next/image'
import React from 'react'
import CardCarousel from '@/components/CardCarousel'

const Aplikacja = () => {
  return (
      <section id='hero' className='w-full flex flex-col justify-center items-center bg-gray-200'>
          
          <div className='w-3/4 md:w-1/2 mx-auto my-8 md:mt-12 text-center'>
            <img src='/app-grid.png' alt='app-grid' />
            <div className='my-6 text-center text-2xl md:text-3xl lg:text-4xl font-bold font-articulat'>
              <h1>Every place an <span className='text-blue-500'>app</span></h1>
              <h2>200 <span className='text-xl font-normal'>wdrożeń w całej Polsce</span></h2>
            </div>
            <Button className='bg-blue-500 rounded-full px-10'>Nasze realizacje</Button>
          </div>
          
          <div className='flex w-full mx-auto justify-center bg-white'>
            <div className='w-4/5'>
            <IconCarousel />
            </div>
          </div>

        <AppBannerBlue />
        
        <h2 className='text-lg font-bold'>Poznaj funkcje aplikacji:</h2>
        <p className='text-sm text-slate-600 mb-5'>Kliknij w wybraną funkcję, aby poznać jej działanie</p>
        
        {/* large screens */}
        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 md:gap-3">
          <div className="w-full h-full md:w-1/2">
            <AppFunctionCard 
              isBig={true} 
              cardBg="Feature_Audioprzewodniki_1.png"
              iconSrc='Feature_Icon_Map.svg' 
              iconAlt='Ikona mapy' 
              title='Interaktywna mapa' 
              content='' 
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {featureCardsBlue.map((i) => (
              <AppFunctionCard
              key={i.id} 
              cardBg={i.cardBg}
              isBig={i.isBig}
              iconSrc={i.iconSrc}
              iconAlt={i.iconAlt}
              title={i.title}
              content={i.content}
              />
            ))}
          </div>
        </div>
            
        {/* mobile */}
        <div className='md:hidden flex justify-center align-middle '>
            <CardCarousel color="blue" />
        </div>

        <div className='mt-6 mb-6'>
          <Button className='bg-blue-500 rounded-full px-10'>Zobacz wszystkie funcje</Button>
        </div>

        <h2 className='text-lg lg:text-2xl font-bold'>Wasze ulubione:</h2>
        <p className='text-sm text-slate-600 mb-5'>Najlepiej ocenianie przez zwiedzających aplikacje opublikowane w sklepach</p>
      
        <div className='flex flex-col md:flex-row gap-2 mb-8'>
          {favouriteAppsCard.map((i) => (
              <FavouriteAppCard 
                key={i.id}
                fileName={i.fileName}
                alt={i.alt}
                rating={i.rating}
              />
            ))
          }
          
        </div>

        <AppBannerGreen />

        <h2 className='text-lg font-bold'>Poznaj funkcje aplikacji:</h2>
        <p className='text-sm text-slate-600 mb-5'>Kliknij w wybraną funkcję, aby poznać jej działanie</p>
        
          {/* large screens */}
          <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 md:gap-3">
          <div className="w-full h-full md:w-1/2">
            <AppFunctionCard 
              isBig={true} 
              cardBg="Feature_Przewodniki_1.png"
              iconSrc='Feature_Icon_Map.svg' 
              iconAlt='Ikona mapy' 
              title='Interaktywna mapa' 
              content='' 
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {featureCardsGreen.map((i) => (
              <AppFunctionCard
              key={i.id} 
              cardBg={i.cardBg}
              isBig={i.isBig}
              iconSrc={i.iconSrc}
              iconAlt={i.iconAlt}
              title={i.title}
              content={i.content}
              />
            ))}
          </div>
        </div>
            
        {/* mobile */}
        <div className='md:hidden flex justify-center align-middle '>
            <CardCarousel color="green" />
        </div>

      </section>
  )
}

export default Aplikacja