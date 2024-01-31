import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Storage } from '../../entities';
import { headers } from '../../entities/Storage';

const StorageComponent = () => {

  const [lines, setLines] = useState<Storage[]>([]);
  
  useEffect(() => {
    
    fetch('http://localhost:2810/api/storage')
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Storage(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-screen w-screen relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default StorageComponent;
