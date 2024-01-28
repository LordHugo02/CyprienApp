import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Vat } from '../../entities';

const Stock = () => {

  const [lines, setLines] = useState<Vat[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:2810/api/vat')
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Vat(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  const headers = {
    'name': 'nom',
    'rate': 'pourcentage',
  };

  return (
    <div className="h-screen w-screen relative">
        THIS IS LE  STOCK
        <CustomTable lines={lines} headers={headers}/>
    </div>

  );
};

export default Stock;
