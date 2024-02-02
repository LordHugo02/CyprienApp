import React, { useContext, useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Supplier } from '../../entities';
import { headers } from '../../entities/Supplier';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';

const SupplierComponent = ({ api_url = 'http://localhost' }: any) => {

  const [lines, setLines] = useState<Supplier[]>([]);
  const { setType } = useContext(EditorContext);
  
  useEffect(() => {
    setType(EEditorType.SUPPLIER);
    fetch(`${api_url}:2810/api/supplier`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Supplier(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-screen w-screen relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default SupplierComponent;
