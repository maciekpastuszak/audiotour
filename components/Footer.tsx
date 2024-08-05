import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='w-full flex flex-col md:flex-row bg-zinc-700 text-stone-300 text-sm' id='footer'>

        <div className='w-full md:w-1/3 p-7'>
        <Image src="/img/app-logo/logo_mono.svg" width={130} height={15} alt="logo" />
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

        <div className='w-full md:w-1/3 flex flex-col justify-evenly my-5 ps-7 gap-1'>
          <h3>Aplikacje mobilne</h3>
          <p>Audioprzewodniki mobilne</p>
          <p>Przewodniki turystyczne</p>
          <p>Digital experience</p>

          <h3>Audioprzewodniki</h3>
          <p>Zwiedzanie automatyczne</p>
          <p>Ekspozycja z numerkami</p>
          <p>DSynchronizacja z multimediami</p>
         
        </div>
        <div className='w-full md:w-1/3 flex flex-col justify-evenly my-5 ps-7 gap-1'>
       
          <h3>Content creation</h3>
          <p>Nagrania i udźwiękowienie</p>
          <p>Redakcja tekstu</p>
          <p>Tłumaczenia</p>
          <p>Audiodeskrypcja i język migowy</p>

          <h3>Realizacje</h3>
          <p>Mapa realizacji</p>
          <p>Pobierz nasze aplikacje</p>

          <h3>Rozwiązania Tour Guide</h3>
          <h3>Kontakt</h3>
        
        </div>

    </section>
  )
}

export default Footer