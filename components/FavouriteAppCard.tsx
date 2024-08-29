import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import AppStoreBtn from "./AppStoreBtn"

type FavouriteAppsCardProps = {
  fileName: string,
  placeName: string,
  rating: string,
}
const FavouriteAppCard = ({fileName, placeName, rating}: FavouriteAppsCardProps) => {
  return (
    <div className='w-[340px] md:w-[500px] md:h-[104px] flex items-center bg-white rounded-2xl drop-shadow-md px-2'>
      <div className="ms-3">
        <Image src={`/img/app-icons/${fileName}`} width={80} height={80} className='rounded-lg' alt='Ikona ulubionej aplikacji' />
      </div>
      <div className="m-3 flex flex-col leading-5 justify-center gap-1 ps-1">
        <h5 className='text-sm md:text-text2xl font-bold'>{placeName}</h5>
        <div className="flex items-center gap-2">
          <Image src="/img/star.png" width={18} height={18} alt="rating" />
          <p className="text-lg font-bold text-amber-400">{rating}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between">
        {/* <Link href='#' className={buttonVariants({ variant: "outline" })}><img src="/img/app-icons/App_Store_Icon.svg" alt="AppStore Icon" /></Link> */}
        <AppStoreBtn btnColor='bg-gradient-to-b from-[#25B4F0] to-[#267ADF]' iconSrc='App_Store_Icon.svg' storeName='App Store' />
        <AppStoreBtn btnColor='bg-black' iconSrc='Google_Play_Icon.svg' storeName='Google Play' />
      </div>
    </div>
  )
}

export default FavouriteAppCard