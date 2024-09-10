import AudioguideTechCard from '@/components/AudioguideTechCard'
import { devices } from '@/constants'
import React from 'react'

const Audioprzewodniki = () => {
  return (
    <section id='audioprzewodniki' className='w-full flex flex-col justify-center items-center bg-gray-200 pb-3 py-7'>
       <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3">
          <div className="w-full h-full md:w-1/2">
          <AudioguideTechCard 
             isBig={true}
             title="Audioprzewodnik G7"
             subTitle="z klawiaturą numeryczną"
             lead="Audioprzewodnik G7 przeznaczony jest do zwiedzania obiektów zamkniętych oraz przestrzeni otwartych. Może działać w dwóch trybach:"
             feature1="- tryb automatyczny"
             feat1Desc=" - urządzenie automatycznie uruchamia nagrania po wejściu do sali"
             feature2="- klawiatura numeryczna"
             feat2Desc=" - użytkownik samodzielnie uruchamia nagragnia przez wybór odpowiedniego numeru na klawiaturze urządzenia"
             feature3="- tryb półautomatyczny"
             feat3Desc="- zwiedzający samodzielnie uruchamia nagrania po skierowaniu urządzenia na interesujący go eksponat zaopatrzony w odpowiedni nadajnik IR, lub etykietę NFC. (nadajniki i etykiety sprzedawane oddzielnie)"
             summary="Zwiedzający może używać urządzenia podobnie jak pilota do telewizora, wskazując na znacznik z symbolem słuchawek (technologia IR). Znaczniki NFC działają z kolei jak płatność zbliżeniowa kartą - zwiedzający przykłada urządzenie do wyznaczonego miejsca na ekspozycji."
             deviceImg1="img/app-devices/hengda.png"
             />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {devices.map((i) => (
            <AudioguideTechCard 
                isBig={false}
                title={i.title}
                lead={i.lead}
                featureIcon={i.featureIcon}

            />
            ))}
          </div>
        </div>
    </section>
  )
}

export default Audioprzewodniki