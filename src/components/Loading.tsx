import React from 'react';

const Loading = ({ wClass = undefined }: any) => {
  const baseClass = `h-screen ${wClass ? wClass : 'w-screen'} absolute top-0 left-0 bg-slate-100 flex items-center justify-around z-50`;
  return (
    <div className={baseClass}>
      <div className='h-64 w-64 relative *:w-full *:h-8 *:z-20 *:rounded-full *:outline *:outline-1 *:outline-slate-400 *:absolute *:top-half *:origin-center' id="waitLoader">
        <div className=''></div>
        <div className=' rotate-45'></div>
        <div className=' rotate-90'></div>
        <div className=' rotate-[135deg]'></div>
      </div>
    </div>
  );
};

export default Loading;
