import React from 'react';
import { appCarouselIcons } from '../constants/index';

const Carousel: React.FC = () => {
  const duplicatedIcons = [...appCarouselIcons, ...appCarouselIcons];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedIcons.map((icon, index) => (
          <div key={index} className="inline-block px-4">
            <img
              src={`/img/carousel-icons/app-carousel-icon-${icon.id}.png`}
              alt={icon.alt}
  
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
