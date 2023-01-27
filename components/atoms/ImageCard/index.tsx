import React from 'react';
import { useRouter } from 'next/router';
interface ImageCardType {
  text: string;
}
const ImageCard = ({ text }: ImageCardType) => {
  const router = useRouter();
  return (
    <div
      className="h-20 bg-gray-400 flex justify-center items-center cursor-pointer"
      onClick={() => router.push('/fuji')}
    >
      <span className="border-b-2 border-white text-white">{text}</span>
    </div>
  );
};

export default ImageCard;
