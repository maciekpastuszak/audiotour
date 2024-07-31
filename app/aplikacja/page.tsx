import AppFunctionCard from '@/components/AppFunctionCard'
import ApplicationCard from '@/components/ApplicationCard'
import Carousel from '@/components/Carousel'
import FavouriteApp from '@/components/FavouriteApp'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { appCarouselIcons, featureCards } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Aplikacja = () => {
  return (
      <section id='hero' className='w-full flex flex-col justify-center items-center bg-gray-200'>
          
          <div className='w-3/4 md:w-1/2 mx-auto my-8 md:mt-12 text-center'>
            <Image src='/app-grid.png' alt='app-grid' layout='responsive' width={1} height={1} />
            <div className='my-6 text-center text-2xl md:text-3xl lg:text-4xl font-bold font-articulat'>
              <h1>Every place an <span className='text-blue-500'>app</span></h1>
              <h2>200 <span className='text-xl font-normal'>wdrożeń w całej Polsce</span></h2>
            </div>
            <Button className='bg-blue-500 rounded-full'>Nasze realizacje</Button>
          </div>
          
          <div className='flex w-full mx-auto justify-center bg-white'>
            <div className='w-4/5'>
            <Carousel />
            </div>
          </div>

        <ApplicationCard />
        
        <h2 className='text-lg font-bold'>Poznaj funkcje aplikacji:</h2>
        <p className='text-sm text-slate-600 mb-5'>Kliknij w wybraną funkcję, aby poznać jej działanie</p>
        
        <div className="flex flex-wrap md:flex-nowrap justify-center w-5/6 gap-3">
          <div className="w-full h-full md:w-1/2">
            <AppFunctionCard 
              isBig={true} 
              iconSrc='/img/app-icons/Feature_Icon_Map.svg' 
              iconAlt='Ikona mapy' 
              title='Interaktywna mapa' 
              content='' 
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {featureCards.map((i) => (
              <AppFunctionCard 
              iconSrc={i.iconSrc}
              iconAlt={i.iconAlt}
              title={i.title}
              content={i.content}
              isBig={i.isBig}
              />
            ))}
          </div>
        </div>

        <div className='my-10'>
          <Button className='bg-blue-500 rounded-full'>Zobacz wszystkie funcje</Button>
        </div>

        <h2 className='text-lg font-bold'>Wasze ulubione:</h2>
        <p className='text-sm text-slate-600 mb-5'>Najlepiej ocenianie przez zwiedzających aplikacje opublikowane w sklepach</p>
      
        <div className='flex flex-col md:flex-row'>
          <FavouriteApp />
          <FavouriteApp />
        </div>
      </section>
  )
}

export default Aplikacja