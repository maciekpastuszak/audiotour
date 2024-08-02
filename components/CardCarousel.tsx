import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import { featureCardsBlue,  featureCardsGreen} from "@/constants"
import AppFunctionCard from "./AppFunctionCard"

type CardCarouselProps = {
    color: string,
}

const CardCarousel = ({ color }: CardCarouselProps) => {
  return (
    <div>
        <Carousel
            opts={{
                align: "start",
            }}
        className="w-full max-w-sm"
        >
            {color === "blue"  && (
            <CarouselContent>
                {featureCardsBlue.map((i) => (
                                <div className="flex-shrink-0 w-full pl-4" key={i.id}>
                                    <AppFunctionCard 
                                        cardBg={i.cardBg}
                                        iconSrc={i.iconSrc} 
                                        iconAlt={i.iconAlt} 
                                        title={i.title} 
                                        content={i.content} 
                                        isBig={false} 
                                        />
                                </div>
                            ))}
            </CarouselContent>
            )}
           
           {color === "green"  && (
            <CarouselContent>
                {featureCardsGreen.map((i) => (
                                <div className="flex-shrink-0 w-full pl-4" key={i.id}>
                                    <AppFunctionCard 
                                        cardBg={i.cardBg}
                                        iconSrc={i.iconSrc} 
                                        iconAlt={i.iconAlt} 
                                        title={i.title} 
                                        content={i.content} 
                                        isBig={false} 
                                        />
                                </div>
                            ))}
            </CarouselContent>
            )}
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    </div>
  )
}

export default CardCarousel