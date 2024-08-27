import React from 'react'

type ContactCardProps = {
    fullName: string,
    mail: string,
    title: string,
    phone?: string
}

const ContactCard = ({ fullName, mail, title, phone }: ContactCardProps) => {
  return (
    <div className='flex flex-col justify-start w-72 gap-3 p-5 border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-md bg-zinc-300'>
        <p className='font-bold text-lg'>{fullName}</p>
        <p className='font-bold text-sm'>{title}</p>
        <p>{mail}</p>
        {phone && <p>{phone}</p>}
    </div>
  )
}

export default ContactCard