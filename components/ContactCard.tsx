import React from 'react'

type ContactCardProps = {
    fullName: string,
    mail: string,
    phone: string
}

const ContactCard = ({ fullName, mail, phone }: ContactCardProps) => {
  return (
    <div>
        <p>{fullName}</p>
        <p>{mail}</p>
        <p>{phone}</p>
    </div>
  )
}

export default ContactCard