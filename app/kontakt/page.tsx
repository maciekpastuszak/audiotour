import ContactCard from '@/components/ContactCard'
import { Button } from '@/components/ui/button'
import { contactCard } from '@/constants'
import React from 'react'

const Kontakt = () => {
  return (
    <div className='w-full flex bg-gray-800 text-white'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-1/3 flex justify-end'>
          <h3>Wyślij zapytanie</h3>
          <input type="text" placeholder='Imię Nazwisko' />
          <input type="text" placeholder='mail' />
          <input type="textare" placeholder='Wiadomość' />
          <Button>Prześlij</Button>
        </div>
        <div className='w-1/3'>
          <h3>Adres</h3>
          <h4>Siedziba:</h4>
          <p>Plac Jana Kilińskiego 2</p>
          <p>35-005 Rzeszów</p>

          <h4>Filia:
            <p>ul. Adama Prażmowskiego 19E</p>
            <p>30-399 Kraków</p>
          </h4>
        </div>
        <div className='w-1/3'>
          <h3>Kontakt:</h3>
          <h4>Biuro:</h4>
          <p>+48 800800800</p>
          <p>+48 800800800</p>
          <p>+48 800800800</p>

          <h4>Sprzedaż:</h4>
          <p>+48 800800800</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <h4>Nasz zespół</h4>
          {contactCard.map((i) => (
            <ContactCard key={i.id} fullName={i.fullName} mail={i.mail} phone={i.phone} />
          ))}
      </div>
    </div>
  )
}

export default Kontakt