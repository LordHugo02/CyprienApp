import React, { useContext, useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Storage } from '../../entities';
import { headers } from '../../entities/Storage';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';

const StorageComponent = () => {

  const [lines, setLines] = useState<Storage[]>([]);
  const { setType } = useContext(EditorContext);
  
  useEffect(() => {
    setType(EEditorType.STORAGE);
    
    fetch(`http://localhost:2810/api/storage`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Storage(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-screen w-full relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default StorageComponent;
