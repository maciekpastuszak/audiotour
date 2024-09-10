import AudioguideTechCard from '@/components/AudioguideTechCard'
import { devices } from '@/constants'
import React from 'react'

const Audioprzewodniki = () => {
  return (
    <section id='audioprzewodniki' className='w-full flex flex-col justify-center items-center bg-gray-200 pb-3'>
       <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3">
          <div className="w-full h-full md:w-1/2">
          <AudioguideTechCard 
            isBig={true} 
            mainImg1='img/app-devices/hengda.png' 
            title='Audioprzewodnik G7' 
            subTitle='z klawiaturą numerycznąć' 
            desc={''} 
            mainImg2={''}
          />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {devices.map((i) => (
            <AudioguideTechCard 
                isBig={false}
                title={i.title}
                desc={i.desc}
                mainImg2={''} mainImg1={''} subTitle={''}              // setActiveCard={() => setActiveCardBlue(i)}
            />
            ))}
          </div>
        </div>
    </section>
  )
}

export default Audioprzewodniki