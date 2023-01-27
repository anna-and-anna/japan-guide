import { Main, Template } from '@/components';
import React from 'react';

const Fuji = () => {
  return (
    <Template>
      <div className="bg-white h-12 flex justify-center items-center text-xl">
        MT.FUJI
      </div>
      <Main texts={TEXTS} />
    </Template>
  );
};

export default Fuji;

const TEXTS = [
  'Kawaguchiko is easily reached by highway bus. You can buy the tickets directly at Shinjuku Station. To do this, cross the street and ask directly at the bus terminal info point. You can also take the Shinkansen, but you have to change trains and the train only returns once an hour.',
  'Rent a bike at the train station to make it easier to get around the lake. It would take an hour to walk to the other side. There is a beautiful avenue of cherry blossoms. So rent a bike and hit the road.',
  'Some of the shops in Kawaguchiko close quite early. So you should have lunch until afternoon. The bus can be delayed on the way back because it makes several stops and getting on and off is not always as fast as it should be.',
];
