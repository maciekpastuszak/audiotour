import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='w-full flex flex-col md:flex-row justify-start items-start text-center md:text-left bg-zinc-700 text-stone-400 text-sm p-6' id='footer'>

        <div className='w-full md:w-1/3 p-3'>
          <Image src="/img/app-logo/Logo_mono.svg" width={130} height={15} alt="logo" className='mx-auto md:ms-0'/>
          <h4 className='mt-5'>Siedziba:</h4>
          <p>Plac Jana Kilińskiego 2</p>
          <p>35-005 Rzeszów</p>

          <h4 className='mt-3'>Filia:</h4>
            <p>ul. Adama Prażmowskiego 19E</p>
            <p>30-399 Kraków</p>
          <div className='flex flex-col md:flex-row justify-start'>
            <div>
              <h4 className='mt-3'>Biuro:</h4>
              <p>+48 800800800</p>
              <p>+48 800800800</p>
              <p>+48 800800800</p>
            </div>
            
            <div className='ms-0 md:ms-3'>
              <h4 className='mt-3'>Sprzedaż:</h4>
              <p>+48 800800800</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full md:w-1/3 p-3 leading-6'>
          <h3>Aplikacje mobilne</h3>
          <Link href='#'>Audioprzewodniki mobilne</Link>
          <Link href='#'>Przewodniki turystyczne</Link>
          <Link href='#' className='mb-5'>Digital experience</Link>

          <h3>Audioprzewodniki</h3>
          <Link href='#'>Zwiedzanie automatyczne</Link>
          <Link href='#'>Ekspozycja z numerkami</Link>
          <Link href='#'>Synchronizacja z multimediami</Link>
         
        </div>
        <div className='w-full md:w-1/3 p-3 gap-1 leading-6'>
       
          <h3>Content creation</h3>
          <Link href='#'>Nagrania i udźwiękowienie</Link>
          <Link href='#'>Redakcja tekstu</Link>
          <Link href='#'>Tłumaczenia</Link>
          <Link href='#' className='mb-5'>Audiodeskrypcja i język migowy</Link>

          <h3>Realizacje</h3>
          <Link href='#'>Mapa realizacji</Link>
          <Link href='#' className='mb-5'>Pobierz nasze aplikacje</Link>

          <h3>Rozwiązania Tour Guide</h3>
          <h3>Kontakt</h3>
        
        </div>

    </section>
  )
}

export default Footer