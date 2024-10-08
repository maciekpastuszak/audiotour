"use client"

import React, { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import { Button } from './ui/button';

interface Card {
  id: number,
  bgImgAlt: string;
  tourIconAlt: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  desc: string;
  display_priority: number;
  linkAppStore: string;
  linkGooglePlay: string;
}

interface PortfolioGridProps {
  cards: Card[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ cards }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const sortedCards = cards.sort((a, b) => b.display_priority - a.display_priority);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 20); // Show 6 more cards each time
  };

  return (
    <div className='flex flex-col items-center mb-5'>

      <div className='flex flex-wrap justify-center gap-4'>
        {sortedCards.slice(0, visibleCount).map((card: Card, index: number) => (
          <PortfolioCard
            key={index}
            bgImg={`/img/portfolio/heroes/${card.id}a.jpg`}
            tourIcon={`/img/portfolio/icons/${card.id}.png`}
            title={card.title}
            subtitle1={card.subtitle1}
            subtitle2={card.subtitle2}
            desc={card.desc}
            linkAppStore={card.linkAppStore}
            linkGooglePlay={card.linkGooglePlay}
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
