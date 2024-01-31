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
    <div className="h-screen w-screen relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default Stock;