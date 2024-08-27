"use client"

import AppFunctionCard from '@/components/AppFunctionCard'
import AppBanner from '@/components/AppBanner'
import IconCarousel from '@/components/IconCarousel'
import FavouriteAppCard from '@/components/FavouriteAppCard'
import { Button } from '@/components/ui/button'
import { featureCardsBlue, featureCardsGreen, favouriteAppsCard1, favouriteAppsCard2, processCards } from '@/constants'
import React from 'react'
import CardCarousel from '@/components/CardCarousel'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ReviewCard from '@/components/ReviewCard'


const Aplikacja = () => {
  return (
      <section id='hero' className='w-full flex flex-col justify-center items-center bg-gray-200 pb-3'>
          <div className='w-3/4 md:w-1/2 mx-auto my-8 md:mt-12 text-center'>
            <motion.div 
              className='relative h-1/2 w-full pt-[50%]'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              >
              <Image src='/img/app-icon-grid.png' alt='Siatka ikon' fill />
            </motion.div>
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

        <AppBanner  
          headerIcon='Icon_Audioprzewodniki.svg'
          headerTitle='Audioprzewodniki'
          subtitle1='Prosta obsługa,'
          subtitle2Color='text-blue-500'
          subtitle2='szybka realizacja'
          bannerBgSrc='Banner_Audioprzewodniki_Wide.png'
          mobileImg='Banner_Audioprzewodniki_Tel.png'
          lead='Idealne Rozwiązanie dla Muzeów i Miejskich Przestrzeni'
          ctaText='Zobacz więcej'
          text1='Audioprzewodnik w formie aplikacji mobilnej to rozwiązanie, które umożliwia zwiedzającym odkrywanie miast i muzeów za pomocą swojego urządzenia z systemem Android lub iOS.'
          text2='Prosta w użyciu, dostępna dla każdego, aplikacja w multimedialny sposób oprowadzi zwiedzającego po danym terenie. Jest doskonałą alternatywą dla tradycyjnego urządzenia dzięki możliwości dostosowania jej do potrzeb użytkowników. Obsługuje ustawienia dostępności, audiodeskrypcję oraz język migowy dzięki czemu każdy może się nią w pełni cieszyć. Z naszą aplikacją zwiedzanie staje się łatwiejsze i przyjemniejsze  niż kiedykolwiek wcześniej.'
        />
        
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
        <div className='md:hidden flex justify-center align-middle'>
            <CardCarousel color="blue" />
        </div>

        <div className='mt-6 mb-6'>
          <Button className='bg-blue-500 rounded-full px-10'>Poznaj wszystkie funkcje</Button>
        </div>

        <h2 className='text-lg lg:text-2xl font-bold'>Wasze ulubione:</h2>
        <p className='text-sm text-slate-600 mb-5'>Najlepiej ocenianie przez zwiedzających aplikacje opublikowane w sklepach</p>
      
        <div className='flex flex-col md:flex-row gap-2 mb-8'>
          {favouriteAppsCard1.map((i) => (
              <FavouriteAppCard 
                key={i.id}
                fileName={i.fileName}
                alt={i.alt}
                rating={i.rating}
              />
            ))
          }
          
        </div>

        <AppBanner  
          headerIcon='Icon_Przewodniki.svg'
          headerTitle='Przewodniki turystyczne'
          subtitle1='Zawsze aktualny,'
          subtitle2Color='text-green-500'
          subtitle2='wiele możliwości'
          bannerBgSrc='Banner_Przewodniki_Wide.png'
          mobileImg='Banner_Przewodniki_Tel.png'
          lead='Na szlaku, na szczycie? Zawsze z Tobą.'
          ctaText='Zobacz więcej'
          text1='Przewodnik turystyczny oferuje możliwość eksplorowania różnorodnych szlaków i tras w najpiękniejszych miejscach, wszystko dostępne z łatwością na urządzeniu mobilnym.'
          text2='Aplikacja wyróżnia się szeroką gamą funkcji, w tym możliwością dodawania różnych rodzajów tras - pieszych, rowerowych czy nawet narciarskich. Z łatwością znajdziesz najlepsze szlaki po górach, malowniczych parkach oraz innych fascynujących terenach, gotowych do odkrycia i eksploracji. Przewodnik można rozszerzyć o dodatkowe moduły, które zapewnią jeszcze więcej przyjemności z podróży. Czy chciałbyś wzbogacić swoje doświadczenie o fascynującą grę terenową, czy być na bieżąco z planami na kolejne dni dzięki kalendarzowi? - dzięki aplikacji wszystko to jest możliwe!'
        />

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

        <div className='mt-6 mb-6'>
          <Button className='bg-[rgb(69,150,41)] rounded-full px-10 font-bold'>Poznaj wszystkie funkcje</Button>
        </div>

        <h2 className='text-lg lg:text-2xl font-bold'>Wasze ulubione:</h2>
        <p className='text-sm text-slate-600 mb-5'>Najlepiej ocenianie przez zwiedzających aplikacje opublikowane w sklepach</p>
      
        <div className='flex flex-col md:flex-row gap-2 mb-8'>
          {favouriteAppsCard2.map((i) => (
              <FavouriteAppCard 
                key={i.id}
                fileName={i.fileName}
                alt={i.alt}
                rating={i.rating}
              />
            ))
          }
          
        </div>

        <AppBanner  
          headerIcon='Icon_Bespoke.svg'
          headerTitle='Rozwiązania skrojone na wymiar'
          subtitle1=''
          subtitle2Color=''
          subtitle2=''
          bannerBgSrc='Banner_Bespoke_Wide.png'
          mobileImg='Banner_Bespoke_Tel_Alt.png'
          lead='Kiedy potrzebujesz więcej kontroli'
          ctaText='Zobacz więcej'
          text1='Możliwości personalizacji sprawiają, że aplikacja staje się Twoim idealnym partnerem w realizacji pomysłów. Bez względu na to, czy chcesz stworzyć interaktywny przewodnik, mobilną grę edukacyjną czy narzędzie do zarządzania, nasza aplikacja pozwoli Ci na to.'
          text2='Z nami Twoje kreatywne wizje stają się rzeczywistością! Niezależnie od tego, czy jesteś turystą, przedsiębiorcą czy pasjonatem technologii, nasza aplikacja dostarczy Ci niezapomnianych doświadczeń i rozwiązań dostosowanych do Twoich potrzeb.'
        />

        <h2 className='text-lg font-bold'>Nasz proces:</h2>
        <p className='text-sm text-slate-600 mb-5'>Kliknij w wybrany krok, aby dowiedzieć się więcej</p>
        
        {/* large screens */}
        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 md:gap-3 mb-6">
          <div className="w-full h-full md:w-1/2">
            <AppFunctionCard 
              isBig={true} 
              cardBg="Feature_Process_1.jpg"
              iconSrc='Feature_Icon_Lead.svg' 
              iconAlt='Ikona rozmowy' 
              title='1. Rozmowa' 
              content='' 
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {processCards.map((i) => (
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
        <div className='md:hidden flex justify-center align-middle mb-6'>
            <CardCarousel color="process" />
        </div>

        <h2 className='text-lg font-bold'>Opinie klientów i turystów:</h2>
        <p className='text-sm text-slate-600 mb-5 mx-5 text-center'>Audioprzewodnik to audioprzewodnik, który oprowadzi Pańśtwa w multimedialny sposób po multimedialnym mieście Kraków.</p>
        
        <div className='w-1/2'>
          <div className='flex justify-start'>
            <ReviewCard 
            name='Błażej'
            isImgLeft={true}
            profilePic='/img/man_smiling.jpg' 
            place='Muzeum Wojska Polskiego' 
            desc='Wspaniała aplikacja, która oprowadzi po najciekawszych zabytkach. Super przyjemny głos lektora, tempo idealne, a wiadomości ciekawe. Nawigacja prowadzi jak po sznurku - nie jest się w stanie zbłądzić. Polecam zdecydowanie!'
            rating='5' />
          </div>
          <div className='flex justify-end'>
            <ReviewCard 
            name='R S'
            isImgLeft={false}
            profilePic='/img/woman_smiling.png' 
            place='Muzeum Dom Jana Pawła II w Wadowicach' 
            desc='Coś wspaniałego! Bardzo profesjonalna apka, głos lektora i długość opowieści w poszczególnych segmentach wystawy świetnie dobrane. Ma się poczucie jakby przewodnik stał przy nas. Wprowadza bardzo fajny klimat; wszystko świetnie współgra.'
            rating='5' />
          </div>
          <div>
            <ReviewCard 
            name='Monika Cz'
            isImgLeft={true}
            profilePic='/img/man_smiling.jpg' 
            place='Zamość Stare Miasto' 
            desc='Jako rodowita Zamościanka nie wiedziałam o istnieniu tej aplikacji. No bo i niby po co 😂, przecież znam Zamość, jak nikt inny, mieszkam tu od 45 lat...A tu niespodzianka, świetne narzędzie, będę polecać 🖤 Ba nawet przy najbliższej okazji wypróbuję na sobie!'
            rating='5' />
          </div>
        </div>

      </section>
  )
}

export default Aplikacja