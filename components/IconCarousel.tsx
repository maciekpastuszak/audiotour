import React from 'react';
import { appCarouselIcons } from '../constants/index';

const Carousel: React.FC = () => {
  const duplicatedIcons = [...appCarouselIcons, ...appCarouselIcons];

  return (
    <div className="carousel-container relative bg-white">
      <div className="animate-scroll whitespace-nowrap py-2 mt-1">
        {duplicatedIcons.map((icon, index) => (
          <div key={index} className="inline-block px-4">
            <img
              src={`/img/carousel-icons/app-carousel-icon-${icon.id}.png`}
              alt={icon.alt}
              className="carousel-icon h-6 md:h-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Carousel;
