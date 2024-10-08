"use client"

import AppFunctionCard from '@/components/AppFunctionCard'
import AppBanner from '@/components/AppBanner'
import IconCarousel from '@/components/IconCarousel'
import FavouriteAppCard from '@/components/FavouriteAppCard'
import { Button } from '@/components/ui/button'
import { featureCardsBlue, featureCardsGreen, favouriteAppsCard1, favouriteAppsCard2, processCards } from '@/constants'
import React, { useState } from 'react'
import CardCarousel from '@/components/CardCarousel'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'
import InterTitle from '@/components/InterTitle'


const Aplikacja = () => {
  const [activeCardBlue, setActiveCardBlue] = useState(featureCardsBlue[0])
  const [activeCardGreen, setActiveCardGreen] = useState(featureCardsGreen[0])
  const [activeProcessCard, setActiveProcessCard] = useState(processCards[0])

  return (
      <section id='hero' className='w-full flex flex-col justify-center items-center bg-gray-200 pb-5'>
          <div className='flex flex-col justify-center items-center mx-auto my-8 md:mt-12 text-center'>
            <motion.div 
              className=''
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              >
              <Image src='/img/app-icon-grid.png' alt='Siatka ikon' width={739} height={368} />
            </motion.div>
            <div className='my-6 text-left text-3xl md:text-5xl text-nowrap font-bold'>
              <h1>Every place an <span className='text-blue-500'>app</span></h1>
              <h2>200 <span className='text-xl md:text-3xl md:fontSize-font3xl font-normal'>wdrożeń w całej Polsce</span></h2>
            </div>
            <Button className='bg-blue-500 rounded-full px-10'>
              <Link href={'/realizacje'}>Nasze realizacje</Link>
            </Button>
            {/* <Link className={`${buttonVariants({ variant: "outline" })} bg-blue-500 rounded-full px-10`} href='/realizacje'>Nasze realizacje</Link> */}
          </div>
          
          <div className='flex w-full mx-auto justify-center bg-white'>
            <div className='w-3/5 py-2'>
            <IconCarousel />
            </div>
          </div>

          <div id='audioprzewodniki'></div>
            <AppBanner  
            headerIcon='Icon_Audioprzewodniki.svg'
            lineColor='bg-blue-500'
            headerTitle='Aplikacja Audioguide'
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
        
        <InterTitle title='Poznaj funkcje aplikacji:' subTitle='Kliknij w wybraną funkcję, aby poznać jej działanie' />

        {/* large screens */}
        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3">
          <div className="w-full h-full md:w-1/2">
            <AppFunctionCard 
              isBig={true} 
              cardBg={activeCardBlue.cardBg}
              iconSrc={activeCardBlue.iconSrc}
              title={activeCardBlue.title}
              content={activeCardBlue.content}
              smartphoneImg='img/app-phone-mockups/Feature_Audioprzewodniki_SS1.png'
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {featureCardsBlue.map((i) => (
              <AppFunctionCard
              key={i.id} 
              cardBg={i.cardBg}
              isBig={i.isBig}
              iconSrc={i.iconSrc}
              title={i.title}
              content={i.content}
              smartphoneImg={i.smartphoneImg}
              setActiveCard={() => setActiveCardBlue(i)}
              />
            ))}
          </div>
        </div>
            
        {/* mobile */}
        <div className='md:hidden flex justify-center align-middle'>
            <CardCarousel color="blue" />
        </div>

        <div className='mt-6 mb-6'>
          <Link href='/realizacje'>
            <Button className='bg-blue-500 rounded-full px-10'>Portfolio</Button>
          </Link>
        </div>

        <InterTitle title='Popularne:' subTitle='Najlepiej ocenianie przez zwiedzających aplikacje opublikowane w sklepach' />
      
        <div className='flex flex-col lg:flex-row gap-2 mb-8'>
          {favouriteAppsCard1.map((i) => (
              <FavouriteAppCard 
                key={i.id}
                fileName={i.fileName}
                placeName={i.alt}
                rating={i.rating}
                linkAppStore={i.linkAppStore}
                linkGooglePlay={i.linkGooglePlay}
              />
            ))
          }
          
        </div>

        <div id='aplikacjaTurystyczna'></div>
          <AppBanner  
            headerIcon='Icon_Przewodniki.svg'
            lineColor='bg-green-500'
            headerTitle='Aplikacja Turystyczna'
            subtitle1='Zawsze aktualna,'
            subtitle2Color='text-green-500'
            subtitle2='dająca wiele możliwości'
            bannerBgSrc='Banner_Przewodniki_Wide.png'
            mobileImg='Banner_Przewodniki_Tel_v2.png'
            lead='Na szlaku, na szczycie? Zawsze z Tobą.'
            ctaText='Zobacz więcej'
            text1='Przewodnik turystyczny oferuje możliwość eksplorowania różnorodnych szlaków i tras w najpiękniejszych miejscach, wszystko dostępne z łatwością na urządzeniu mobilnym.'
            text2='Aplikacja wyróżnia się szeroką gamą funkcji, w tym możliwością dodawania różnych rodzajów tras - pieszych, rowerowych czy nawet narciarskich. Z łatwością znajdziesz najlepsze szlaki po górach, malowniczych parkach oraz innych fascynujących terenach, gotowych do odkrycia i eksploracji. Przewodnik można rozszerzyć o dodatkowe moduły, które zapewnią jeszcze więcej przyjemności z podróży. Czy chciałbyś wzbogacić swoje doświadczenie o fascynującą grę terenową, czy być na bieżąco z planami na kolejne dni dzięki kalendarzowi? - dzięki aplikacji wszystko to jest możliwe!'
          />
       
        <InterTitle title='Poznaj funkcje aplikacji:' subTitle='Kliknij w wybraną funkcję, aby poznać jej działanie' />

          {/* large screens */}
        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3">
          <div className="w-full h-full md:w-1/2">
            <AppFunctionCard 
              isBig={true} 
              cardBg={activeCardGreen.cardBg}
              iconSrc={activeCardGreen.iconSrc}
              title={activeCardGreen.title}
              content={activeCardGreen.content}
              smartphoneImg='img/app-phone-mockups/Feature_Przewodniki_SS1.png'
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {featureCardsGreen.map((i) => (
              <AppFunctionCard
              key={i.id} 
              cardBg={i.cardBg}
              isBig={i.isBig}
              iconSrc={i.iconSrc}
              title={i.title}
              content={i.content}
              smartphoneImg={i.content}
              setActiveCard={() => setActiveCardGreen(i)}
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

        <InterTitle title='Popularne:' subTitle='Najlepiej ocenianie przez zwiedzających aplikacje opublikowane w sklepach' />
        
        <div className='flex flex-col lg:flex-row gap-5 mb-8'>
          {favouriteAppsCard2.map((i) => (
              <FavouriteAppCard 
                key={i.id}
                fileName={i.fileName}
                placeName={i.alt}
                rating={i.rating}
                linkAppStore={i.linkAppStore}
                linkGooglePlay={i.linkGooglePlay}
              />
            ))
          }
        </div>
        <AppBanner  
          headerIcon='Icon_Bespoke.svg'
          lineColor='bg-gray-500'
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

        <h2 className='text-lg font-bold mb-5'>Nasz proces:</h2>
        {/* <p className='text-sm text-slate-600 mb-5'>Kliknij w wybrany krok, aby dowiedzieć się więcej</p> */}
        
        {/* large screens */}
        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 md:gap-3 max-w-[1066px] mb-6">
          <div className="w-full h-full md:w-1/2">
            <AppFunctionCard 
              isBig={true} 
              cardBg={activeProcessCard.cardBg}
              iconSrc={activeProcessCard.iconSrc}
              title={activeProcessCard.title}
              content={activeProcessCard.content}
              smartphoneImg='img/app-phone-mockups/Feature_Bespoke_SS1.png'
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {processCards.map((i) => (
              <AppFunctionCard
              key={i.id} 
              cardBg={i.cardBg}
              isBig={i.isBig}
              iconSrc={i.iconSrc}
              title={i.title}
              content={i.content}
              smartphoneImg={i.content}
              setActiveCard={() => setActiveProcessCard(i)}
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
        
        <div className='w-[350px] md:w-2/3 max-w-[600px] grid grid-cols-1 md:grid-cols-2 gap-4'>
  <div className='flex justify-start'>
    <ReviewCard 
      name='Błażej'
      isImgLeft={true}
      profilePic='/img/man_smiling.jpg' 
      place='Muzeum Wojska Polskiego' 
      desc='Wspaniała aplikacja, która oprowadzi po najciekawszych zabytkach. Super przyjemny głos lektora, tempo idealne, a wiadomości ciekawe. Nawigacja prowadzi jak po sznurku - nie jest się w stanie zbłądzić. Polecam zdecydowanie!'
      rating='5' 
    />
  </div>
  <div className='flex justify-end mt-4 md:mt-0'>
    <ReviewCard 
      name='R S'
      isImgLeft={false}
      profilePic='/img/woman_smiling.png' 
      place='Muzeum Dom Jana Pawła II w Wadowicach' 
      desc='Coś wspaniałego! Bardzo profesjonalna apka, głos lektora i długość opowieści w poszczególnych segmentach wystawy świetnie dobrane. Ma się poczucie jakby przewodnik stał przy nas. Wprowadza bardzo fajny klimat; wszystko świetnie współgra.'
      rating='5' 
    />
  </div>
  <div className='flex justify-start mt-4 md:mt-0'>
    <ReviewCard 
      name='Monika Cz'
      isImgLeft={true}
      profilePic='/img/man_smiling.jpg' 
      place='Zamość Stare Miasto' 
      desc='Jako rodowita Zamościanka nie wiedziałam o istnieniu tej aplikacji. No bo i niby po co 😂, przecież znam Zamość, jak nikt inny, mieszkam tu od 45 lat...A tu niespodzianka, świetne narzędzie, będę polecać 🖤 Ba nawet przy najbliższej okazji wypróbuję na sobie!'
      rating='5' 
    />
  </div>
  <div className='flex justify-end mt-4 md:mt-0'>
    <ReviewCard 
      name='R S'
      isImgLeft={false}
      profilePic='/img/woman_smiling.png' 
      place='Muzeum Dom Jana Pawła II w Wadowicach' 
      desc='Coś wspaniałego! Bardzo profesjonalna apka, głos lektora i długość opowieści w poszczególnych segmentach wystawy świetnie dobrane. Ma się poczucie jakby przewodnik stał przy nas. Wprowadza bardzo fajny klimat; wszystko świetnie współgra.'
      rating='5' 
    />
  </div>
</div>
      </section>
  )
}

export default Aplikacja