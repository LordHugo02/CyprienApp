import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Outcome } from '../../entities';
import { headers } from '../../entities/Outcome';

const OutcomeComponent = ({ api_url = 'http://localhost' }: any) => {

  const [lines, setLines] = useState<Outcome[]>([]);
  
  useEffect(() => {
    
    fetch(`${api_url}:2810/api/outcome`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Outcome(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-screen w-screen relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default OutcomeComponent;