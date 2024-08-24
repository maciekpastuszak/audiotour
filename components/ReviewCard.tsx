import Image from 'next/image'
import React from 'react'

type ReviewCardProps = {
  name: string,
  isImgLeft: boolean,
  profilePic: string,
  place: string,
  desc: string,
  rating: string
}

const ReviewCard = ({ name, isImgLeft, profilePic, place, desc, rating }: ReviewCardProps) => {
  return (
    <div className='relative w-72 h-auto bg-white shadow-xl rounded-lg my-2 py-5 ps-10 pe-6 leading-loose'>
        <h3 className='text-sm font-bold'>{name}</h3>
          <Image src={profilePic} width={45} height={45} alt='Profile img' className={`absolute rounded-full shadow-lg top-4 ${isImgLeft ? '-left-4' : '-right-4'}`}/>
        <p className='text-[0.6rem] text-muted-foreground'>{place}</p>
        <h5 className='text-xs'>{desc}</h5>
        <div className="flex items-center gap-1 mt-1">
          <Image src="/img/star.png" width={12} height={12} alt="rating" />
          <p className="text-sm font-bold text-amber-400">{rating}</p>
        </div>
    </div>
  )
}

export default ReviewCard