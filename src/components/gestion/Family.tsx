import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Family } from '../../entities';
import { headers } from '../../entities/Family';

const Stock = () => {

  const [lines, setLines] = useState<Family[]>([]);
  
  useEffect(() => {
    
    fetch('http://localhost:2810/api/family')
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Family(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    // <div className="h-screen w-screen relative">
    //     <CustomTable lines={lines} headers={headers}/>
    // </div>

    <div className="h-screen w-screen absolute top-0 left-0 bg-slate-100 flex items-center justify-around z-10">
      <div className='h-64 w-64 relative' id="waitLoader">
        <div className='w-full h-8 z-20 rounded-full outline outline-1 outline-black absolute top-half origin-center'></div>
        <div className='w-full h-8 z-20 rounded-full outline outline-1 outline-black absolute top-half origin-center rotate-45'></div>
        <div className='w-full h-8 z-20 rounded-full outline outline-1 outline-black absolute top-half origin-center rotate-90'></div>
        <div className='w-full h-8 z-20 rounded-full outline outline-1 outline-black absolute top-half origin-center rotate-[135deg]'></div>
      </div>
    </div>
  );
};

export default Stock;
