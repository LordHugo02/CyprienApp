import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Income } from '../../entities';
import { headers } from '../../entities/Income';

const IncomeComponent = ({ api_url = 'http://localhost' }: any) => {

  const [lines, setLines] = useState<Income[]>([]);
  
  useEffect(() => {
    
    fetch(`${api_url}:2810/api/income`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Income(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-screen w-screen relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default IncomeComponent;
