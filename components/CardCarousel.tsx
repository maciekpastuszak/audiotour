import { Carousel, CarouselContent, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import { featureCardsBlue,  featureCardsGreen, processCards} from "@/constants"
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
        className="w-full max-w-sm min-h-72 bg-white rounded-xl"
        >
            {color === "blue"  && (
            <CarouselContent>
                {featureCardsBlue.map((i) => (
                                <div className="flex-shrink-0 w-full pl-4" key={i.id}>
                                    <AppFunctionCard 
                                        cardBg={i.cardBg}
                                        iconSrc={i.iconSrc} 
                                        title={i.title} 
                                        content={i.content}
                                        smartphoneImg={i.smartphoneImg} 
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
                                        title={i.title} 
                                        content={i.content} 
                                        smartphoneImg={i.smartphoneImg} 
                                        isBig={false} 
                                        />
                                </div>
                            ))}
            </CarouselContent>
            )}
            <CarouselPrevious className='hidden' />
            <CarouselNext className='hidden' />

            {color === "process"  && (
            <CarouselContent>
                {processCards.map((i) => (
                                <div className="flex-shrink-0 w-full pl-4" key={i.id}>
                                    <AppFunctionCard 
                                        cardBg={i.cardBg}
                                        iconSrc={i.iconSrc} 
                                        title={i.title} 
                                        content={i.content} 
                                        smartphoneImg={i.smartphoneImg} 
                                        isBig={false} 
                                        />
                                </div>
                            ))}
            </CarouselContent>
            )}
            <CarouselPrevious className='hidden' />
            <CarouselNext className='hidden' />
        </Carousel>
    </div>
  )
}

export default CardCarousel