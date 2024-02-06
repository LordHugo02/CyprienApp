import React, { useContext, useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Product } from '../../entities';
import { headers } from '../../entities/Product';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';

const ProductComponent = () => {

  const [lines, setLines] = useState<Product[]>([]);
  const { setType } = useContext(EditorContext);
  
  useEffect(() => {
    setType(EEditorType.PRODUCT);
    fetch(`http://localhost:2810/api/product`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Product(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, );

  return (
    <div className="h-full w-full relative overflow-scroll">
        <CustomTable lines={lines} headers={headers}/>
    </div>

  );
};

export default ProductComponent;
