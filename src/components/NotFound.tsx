import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const main = document.querySelector('main') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;
    if (!header || !main) return;

    main.style.height = 'calc(100vh - ' + header.getBoundingClientRect().height + 'px)';

  }, []);

  return (
    <>
      <Header />
      <main id="" className="relative h-full w-full flex flex-col items-center justify-center text-blue">
        <button className="absolute top-10 left-1/4 nm-convex-blue-base-sm text-white text-xl px-4 py-2 rounded-lg" onClick={() => navigate(-1)}>Retour</button>
        <div className="flex flex-row items-end gap-1 text-9xl">
          <p className='origin-404-first rotate-[-25deg] w-max'>4</p>
          <p className='text-orange -mx-8 w-max'>0</p>
          <p className='origin-404-last rotate-[100deg] w-max'>4</p>
        </div>
        <p className="text-2xl">Oups... Il n&aposy a rien ici...</p>
      </main> 
    </>  
  );
};

export default NotFound;
