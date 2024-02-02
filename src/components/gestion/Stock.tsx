import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Product, Vat } from '../../entities';
import { headers } from '../../entities/Product';

const Stock = ({ api_url = 'http://localhost' }: any) => {

  const [lines, setLines] = useState<Vat[]>([]);
  
  useEffect(() => {

    fetch(`${api_url}:2810/api/product`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Product(item))),
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
