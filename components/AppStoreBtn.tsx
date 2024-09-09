import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

type AppStoreBtnProps = {
  btnColor: string,
  iconSrc: string,
  storeName: string,
  link: string,
}

const AppStoreBtn = ({ btnColor, iconSrc, storeName, link }: AppStoreBtnProps) => {
  return (
    <Button className={`flex justify-between ${btnColor} rounded-full w-24 md:w-36 h-6 md:h-8 px-2`}>
        <div>
          <Image src={`/img/app-icons/${iconSrc}`} alt="App store Icon" width={14} height={14} className='hidden md:block'/>
        </div>
          <p className='text-[10px] md:text-sm md:font-bold'>{storeName}</p>
      <Link href={link}>
          <Image src="/img/app-icons/External_Link_Icon.svg" alt="External link Icon" width={14} height={14} />
      </Link>
    </Button>
  )
}

export default AppStoreBtn