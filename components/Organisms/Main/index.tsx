import React from 'react';
import { ChevronDoubleDown } from '@/components';

interface MainType {
  image?: string;
  texts: string[];
}
const Main = ({ image, texts }: MainType) => {
  return (
    <div className="flex flex-col items-center py-16 ">
      <div className="bg-white rounded-full w-52 h-52" />
      <div className="my-12 text-center font-light w-96">
        {texts.map((text) => (
          <p className='mb-4'>{text}</p>
        ))}
      </div>
      <ChevronDoubleDown />
      <button className="mt-12">
        <span className="text-xl border-b-2 border-black">TOP10</span>
      </button>
    </div>
  );
};

export default Main;
