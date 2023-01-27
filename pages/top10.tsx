import { Template, ImageCard } from '@/components';
import React from 'react';

const TOP10 = () => {
  return (
    <Template>
      <div className="bg-white h-12 flex justify-center items-center text-xl">
        TOP10
      </div>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 p-16">
        {ITEMS.map((item, i) => (
          <ImageCard key={i} text={item} />
        ))}
      </div>
    </Template>
  );
};

export default TOP10;

const ITEMS = [
  'MT.FUJI',
  'NARA',
  'SHIMOYOSHIDA',
  'KYOTO',
  'SHINJUKU GARDEN',
  'DISNEY SEA',
  'MEGURO RIVER',
  'VEGGIE FOOD',
  'MEIJI SHRINE',
  'SENSOJI',
];
