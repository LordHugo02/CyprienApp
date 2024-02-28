import React, { useContext, useEffect, useState } from 'react';
import Storage from '../../models/Storage';
// import CustomTable from './CustomTable';
import GeneralContext from '../../contexts/GeneralContext';
import CustomTable from './CustomTable';
// import { Storage } from '../../entities';
// import { EditorContext } from '../../contexts';
// import { EEditorType } from '../../contexts/EditorContext';

const StorageComponent = () => {

  const [lines, setLines] = useState<Storage[]>([]);
  const { actualClass } = useContext(GeneralContext);
  const { setActualClass } = useContext(GeneralContext);
  
  async function init(){
    if(actualClass){
      const result = await actualClass?.getAllByCompanyId();
      setLines(result.map((item:object) => new Storage(item)));
    }
  }

  useEffect(() => {
    const newClass = new Storage({});
    setActualClass(newClass);
  }, []);

  useEffect(() => {
    init();
  }, [actualClass]);

  return (
    <div className="h-screen w-full relative">  
      { actualClass?.headers &&
        <CustomTable lines={lines} headers={actualClass?.headers}/>
      }
    </div>
  );
};

export default StorageComponent;
