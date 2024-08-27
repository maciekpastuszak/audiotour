import React from 'react'
import Image from 'next/image'

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
              <p><a href="tel:+48510069421">+48 510 069 421</a></p>
              <p><a href="tel:+48697736863">+48 697 736 863</a></p>
              <p><a href="tel:+48884737039">+48 884 737 039</a></p>
            </div>
            
            <div className='ms-0 md:ms-3'>
              <h4 className='mt-3'>Sprzedaż:</h4>
              <p><a href="tel:+488605074637">+48 605 074 637</a></p>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-3 leading-6'>
          <h3>Aplikacje mobilne</h3>
          <p>Audioprzewodniki mobilne</p>
          <p>Przewodniki turystyczne</p>
          <p className='mb-5'>Digital experience</p>

          <h3>Audioprzewodniki</h3>
          <p>Zwiedzanie automatyczne</p>
          <p>Ekspozycja z numerkami</p>
          <p>Synchronizacja z multimediami</p>
         
        </div>
        <div className='w-full md:w-1/3 p-3 gap-1 leading-6'>
       
          <h3>Content creation</h3>
          <p>Nagrania i udźwiękowienie</p>
          <p>Redakcja tekstu</p>
          <p>Tłumaczenia</p>
          <p className='mb-5'>Audiodeskrypcja i język migowy</p>

          <h3>Realizacje</h3>
          <p>Mapa realizacji</p>
          <p className='mb-5'>Pobierz nasze aplikacje</p>

          <h3>Rozwiązania Tour Guide</h3>
          <h3>Kontakt</h3>
        
        </div>

    </section>
  )
}

export default Footer