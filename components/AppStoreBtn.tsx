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
    <Link href={link}>
      <Button className={`flex justify-between ${btnColor} rounded-full w-24 md:w-36 h-6 md:h-8 px-5`}>
          <div className='min-w-[14px] pe-1'>
            <Image src={`/img/app-icons/${iconSrc}`} alt="App store Icon" width={14} height={14} />
          </div>
            <p className='text-[10px] md:text-sm md:font-bold'>{storeName}</p>
      </Button>
    </Link>
  )
}

export default AppStoreBtn