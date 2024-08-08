import ContactCard from '@/components/ContactCard'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { contactCard } from '@/constants'
import React from 'react'

const Kontakt = () => {
  return (
    <>
    <Navbar />
    <section id='kontakt' className='w-full flex flex-col justify-center items-center bg-gray-200'>
      <div className='flex flex-col md:flex-row my-10 mx-3 gap-5'>
        <div className='w-5/6 md:w-1/3'>
          <ContactForm />
        </div>
        <div className='w-5/6 md:w-1/3 border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md'>
          <h3 className='text-xl bold font-bold'>Adres</h3>
          <h4 className='font-bold pt-2'>Siedziba:</h4>
          <p>Plac Jana Kilińskiego 2</p>
          <p>35-005 Rzeszów</p>

          <h4 className='font-bold pt-2'>Filia:</h4>
            <p>ul. Adama Prażmowskiego 19E</p>
            <p>30-399 Kraków</p>
          
        </div>
        <div className='w-5/6 md:w-1/3 border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md'>
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
      {/* <div className='flex flex-col md:flex-row'>
        <h4>Nasz zespół</h4>
          {contactCard.map((i) => (
            <ContactCard key={i.id} fullName={i.fullName} mail={i.mail} phone={i.phone} />
          ))}
      </div> */}

    </section>

    <Footer />
    </>
  )
}

export default Kontakt