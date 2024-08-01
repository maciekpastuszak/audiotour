import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import { featureCards } from "@/constants"
import AppFunctionCard from "./AppFunctionCard"

const CardCarousel = () => {
  return (
    <div>
        <Carousel
            opts={{
                align: "start",
            }}
        className="w-full max-w-sm -ml-4"
        >
            <CarouselContent>
            {featureCards.map((i) => (
                <div className="flex-shrink-0 w-full pl-4">
                    <AppFunctionCard 
                        key={i.id}
                        iconSrc={i.iconSrc} 
                        iconAlt={i.iconAlt} 
                        title={i.title} 
                        content={i.content} 
                        isBig={false} 
                        />
                </div>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CardCarousel