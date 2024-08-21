import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"

type FavouriteAppsCardProps = {
  fileName: string,
  alt: string,
  rating: string,
}
const FavouriteAppCard = ({fileName, alt, rating}: FavouriteAppsCardProps) => {
  return (
    <div className='w-80 h-20 flex items-center bg-white rounded-lg drop-shadow-md'>
      <div className="ms-3">
        <img src={`/img/app-icons/${fileName}`} className='w-[55px] rounded-lg' alt={alt} />
      </div>
      <div className="w-1/2 ms-2 flex flex-col gap-1">
        <h5 className='text-xs font-bold'>{alt}</h5>
        <div className="flex items-center gap-2">
          <img src="/img/star.png" className='w-4 h-4' alt="rating" />
          <p className="text-sm font-bold text-amber-400">{rating}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 me-2 justify-between">
        {/* <Link href='#' className={buttonVariants({ variant: "outline" })}><img src="/img/app-icons/App_Store_Icon.svg" alt="AppStore Icon" /></Link> */}
        <Button className='bg-blue-500 rounded-full w-full h-5 text-[0.6rem] gap-1 flex justify-center'>
          <Image src="/img/app-icons/App_Store_Icon.svg" alt="AppStore Icon" width={20} height={15} />
          App Store
          <Image src="/img/app-icons/External_Link_Icon.svg" alt="External link Icon" width={20} height={15} />
        </Button>
        <Button className='bg-black rounded-full w-full h-5 text-[0.6rem] gap-1 flex justify-center'>
          <Image src="/img/app-icons/Google_Play_Icon.svg" alt="AppStore Icon" width={20} height={15} />
          Google Play
          <Image src="/img/app-icons/External_Link_Icon.svg" alt="External link Icon" width={20} height={15} />
        </Button>
      </div>
    </div>
  )
}

export default FavouriteAppCard