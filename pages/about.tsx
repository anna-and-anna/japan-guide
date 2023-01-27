import { Template, Main } from '@/components';
import React from 'react';

const About = () => {
  return (
    <Template>
      <div className="bg-white h-12 flex justify-center items-center text-xl">
        ABOUT
      </div>
      <Main texts={TEXTS} />
    </Template>
  );
};

export default About;
const TEXTS = [
  'はじめまして。',
  'My name is Anna.',
  'I am 30 years old and come from Germany.',
  'I visited Japan in 2017 and 2019. During this time I was able to collect many impressions and fell in love with the country. Unfortunately, I had to cancel my trip for 2020 due to the pandemic. However, I will make up for this in 2023.',
  'よろしくお願いします',
];
