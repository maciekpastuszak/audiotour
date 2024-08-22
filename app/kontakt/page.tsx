import ContactCard from '@/components/ContactCard'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { contactCard } from '@/constants'
import React from 'react'

const Kontakt = () => {
  return (
    <section id='kontakt' className='w-full flex flex-col justify-center items-center bg-gray-200 pb-5'>
              <div className='flex justify-center bg-[url("/img/promo2.jpg")] w-full'>
      <div className='flex flex-col md:flex-row my-10 md:mx-3 gap-5 items-center md:items-stretch'>
        <div className='w-5/6 md:w-1/3 bg-slate-200'>
          <ContactForm />
        </div>
        <div className='flex flex-col w-5/6 md:w-1/3 items-center md:items-start border-2 border-gray-200 dark:border-gray-700 p-4 rounded-md shadow-md min-h-full bg-slate-200'>
          <h3 className='text-xl bold font-bold'>Adres</h3>
          <h4 className='font-bold pt-2'>Siedziba:</h4>
          <p>Plac Jana Kilińskiego 2</p>
          <p>35-005 Rzeszów</p>

          <h4 className='font-bold pt-2'>Filia:</h4>
          <p>ul. Adama Prażmowskiego 19E</p>
          <p>30-399 Kraków</p>
        </div>
        <div className='flex flex-col w-5/6 md:w-1/3 items-center md:items-start border-2 border-gray-200 dark:border-gray-700 p-4 rounded-md shadow-md min-h-full bg-slate-200'>
          <h3 className='text-xl bold font-bold'>Kontakt</h3>
          <h4 className='font-bold pt-2'>Biuro:</h4>
          <p>+48 800 800 800</p>
          <p>+48 800 800 800</p>
          <p>+48 800 800 800</p>

          <h4 className='font-bold pt-2'>Sprzedaż:</h4>
          <p>+48 800 800 800</p>
          <p>+48 800 800 800</p>
        </div>
      </div>
      </div>

      <div className='w-full md:w-5/6 flex flex-col items-center'>
        <h2 className='font-bold py-3 text-xl'>Nasz zespół</h2>
        <div className='flex flex-col md:flex-row gap-5 my-5 flex-wrap justify-center items-center'>
        {contactCard.map((i) => (
          <ContactCard key={i.id} fullName={i.fullName} mail={i.mail} phone={i.phone} />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Kontakt