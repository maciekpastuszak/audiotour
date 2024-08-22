"use client"

import React, { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard'; // Adjust the import path accordingly
import { Button } from './ui/button';

const PortfolioGrid = ({ cards }) => {
  // State to control how many cards are visible
  const [visibleCount, setVisibleCount] = useState(6);

  // Function to handle "See more" button click
  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Show 6 more cards each time
  };

  return (
    <div className='flex flex-col items-center mb-5'>
      {/* Render visible cards */}
      <div className='flex flex-wrap justify-center gap-4'>
        {cards.slice(0, visibleCount).map((card, index) => (
          <PortfolioCard
            key={index}
            bgImg='/img/portfolio/heroes/10a.jpg'
            bgImgAlt={card.bgImgAlt}
            tourIcon='/img/app-icons/Szlak_Marianny_Oranskiej.png'
            tourIconAlt={card.tourIconAlt}
            title={card.title}
            subtitle1={card.subtitle1}
            subtitle2={card.subtitle2}
            desc={card.desc}
          />
        ))}
      </div>

      {/* Show "See more" button if there are more cards to display */}
      {visibleCount < cards.length && (
        <Button
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600'
          onClick={showMoreCards}
        >
          Zobacz więcej
        </Button>
      )}
    </div>
  );
};

export default PortfolioGrid;
