import React from 'react';
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="bg-white h-12 flex justify-center">
      <div className='max-w-md w-72 flex justify-around'>
        <button onClick={() => router.push('/')}>
          <span
            className={`text-xl ${
              router.pathname === '/' && 'border-b-2 border-black'
            }`}
          >
            HOME
          </span>
        </button>
        <button onClick={() => router.push('/about')}>
          <span className="text-xl">ABOUT</span>
        </button>
        <button onClick={() => router.push('/top10')}>
          <span className="text-xl">TOP10</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
