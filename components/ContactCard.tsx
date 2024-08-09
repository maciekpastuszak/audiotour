import React from 'react'


type ContactCardProps = {
    fullName: string,
    mail: string,
    phone: string
}

const ContactCard = ({ fullName, mail, phone }: ContactCardProps) => {
  return (
    <div className='flex flex-col justify-center w-72 gap-3 p-5 border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-md bg-zinc-300'>
        <p className='font-bold'>{fullName}</p>
        <p>{mail}</p>
        <p>{phone}</p>
    </div>
  )
}

export default ContactCard