import AudioguideCard from '@/components/AudioguideCard'
import InterTitle from '@/components/InterTitle'
import { deviceG7, deviceAG600, deviceAG600c } from '@/constants'
import React from 'react'

const Audioprzewodniki = () => {
  return (
    <section id='audioprzewodniki' className='w-full flex flex-col justify-center items-center bg-gray-200 pb-3 py-7'>
       
       <InterTitle title='Poznaj funkcje Audioprzewodnika:' subTitle='Kliknij w wybraną funkcję, aby poznać jej działanie' />
       <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3 my-3">
          <div className="w-full h-full md:w-1/2">
            <AudioguideCard 
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
             deviceImg1="/img/tech-devices/hengda.png"
             />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {deviceG7.map((i) => (
            <AudioguideCard 
                isBig={false}
                title={i.title}
                lead={i.lead}
                featureIcon={i.featureIcon}
            />
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3 my-3">
        <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {deviceAG600.map((i) => (
            <AudioguideCard 
                isBig={false}
                title={i.title}
                lead={i.lead}
                featureIcon={i.featureIcon}
            />
            ))}
          </div>
          <div className="w-full h-full md:w-1/2">
            <AudioguideCard 
             isBig={true}
             title="Audioprzewodnik AG-600"
             subTitle="automatyczny z klawiaturą numeryczną"
             lead="Audioprzewodnik AG-600 przeznaczony jest do zwiedzania obiektów zamkniętych oraz przestrzeni otwartych. Może działać w dwóch trybach:"
             feature1="- tryb automatyczny"
             feat1Desc="– w tym trybie audioprzewodnik lokalizuje aktualne położenie zwiedzającego i automatycznie rozpoczyna odtwarzanie odpowiedniego nagrania. Nagranie uruchamiane jest za pomocą specjalnego znacznika radiowego. Znaczniki radiowe są zasilane bateryjnie (powszechnie dostępne baterie typu AA) lub prądem (wedle wyboru)."
             feature2="- tryb ręczny"
             feat2Desc={`  – pozwala zwiedzającemu samodzielnie uruchamiać nagrania w następujące trzy sposoby: <ul><li>abc</li></ul>"`}
             feature3=""
             feat3Desc=""
             summary="ryb automatyczny i ręczny można oczywiście połączyć. Wtedy w wybranych miejscach (np. salach) nagrania będą uruchamiać się automatycznie, a po ich wysłuchaniu zwiedzający będzie mógł przejść w tryb ręczny. W każdym momencie zwiedzający może wstrzymać nagranie, lub przewinąć je wstecz lub w przód."
             deviceImg1="/img/tech-devices/ag-600-front.png"
             />
          </div>
        </div>

        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3 my-3">
          <div className="w-full h-full md:w-1/2">
            <AudioguideCard 
             isBig={true}
             title="Audioprzewodnik AG-600c"
             subTitle="z klawiaturą numeryczną"
             lead="Audioprzewodnik AG 600c przeznaczony jest do zwiedzania obiektów zamkniętych oraz przestrzeni otwartych. Może działać w dwóch trybach:"
             feature1="- klawiatura numeryczna"
             feat1Desc="- użytkownik samodzielnie uruchamia nagragnia przez wybór odpowiedniego numeru na klawiaturze urządzenia."
             feature2="- tryb podczerwień"
             feat2Desc=" - zwiedzający samodzielnie uruchamia nagrania po skierowaniu urządzenia na interesujący go eksponat zaopatrzony w odpowiedni nadajnik IR. (sprzedawany oddzielnie)"
             feature3=""
             feat3Desc=""
             summary="Zwiedzający może używać urządzenia podobnie jak pilota do telewizora, wskazując na znacznik z symbolem słuchawek (technologia IR). Dodatkowo urządzenie umożliwia przewijanie wstecz i do przodu."
             deviceImg1="/img/tech-devices/ag-600c-2.png"
             />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {deviceAG600c.map((i) => (
            <AudioguideCard 
                isBig={false}
                title={i.title}
                lead={i.lead}
                featureIcon={i.featureIcon}
            />
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:flex-nowrap md:justify-center md:w-5/6 max-w-[1066px] md:gap-3 my-3">
          <div className="w-full h-full md:w-1/2">
            <AudioguideCard 
             isBig={true}
             title="Synchronizator ATV-6"
             subTitle=""
             lead="Pozwala na synchronizacje ścieżek dźwiękowych nagranych na audioprzewodnikach z urządzeniami multimedialnymi umieszczonymi na ekspozycji (tj. kioski multimedialne, telewizory, projektory itp.). Dzięki niemu zwiedzający zawsze słyszy ścieżkę dźwiękową w odpowiednim języku i odpowiednim miejscu ścieżki dźwiękowej. Typowym zastosowaniem synchronizatora jest udostępnianie ścieżek dźwiękowych prezentacji multimodalnych (np. filmów) zwiedzającym w języku wybranym przez nich na początku wycieczki. Może to się dobywać na dwa sposoby:"
             feature1="Automatycznie – używając technologii radiowej (RF)"
             feat1Desc="- po wejściu w zasięg znacznika (np. sala ekspozycyjna) synchronizator uruchomi zwiedzającemu ścieżkę dźwiękową prezentacji multimedialnej (np. filmu) wyświetlanej w tym miejscu. Ścieżka dźwiękowa przewinie się do odpowiedniego miejsca i otworzy w języku wybranym przez zwiedzającego na początku zwiedzania."
             feature2="Ręcznie – używając technologii podczerwieni (IR)"
             feat2Desc=" - ścieżka dźwiękowa prezentacji (np. do filmu) nie włączy się automatycznie. Zwiedzający musi najpierw skierować audioprzewodnik na synchronizator (działa podobne do pilota do telewizora). Dopiero wtedy ścieżka dźwiękowa przewinie się do odpowiedniego miejsca i otworzy w języku wybranym przez zwiedzającego na początku zwiedzania."
             feature3=""
             feat3Desc=""
             summary=""
             deviceImg1="/img/tech-devices/ag-600c-2.png"
             />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-3">
            {deviceAG600c.map((i) => (
            <AudioguideCard 
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