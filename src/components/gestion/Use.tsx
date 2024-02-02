import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Use } from '../../entities';
import { headers } from '../../entities/Use';

const UseComponent = ({ api_url = 'http://localhost' }: any) => {

  const [lines, setLines] = useState<Use[]>([]);
  
  useEffect(() => {
    fetch(`${api_url}:2810/api/use`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Use(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-screen w-screen relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default UseComponent;
