import React, { useContext, useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Family } from '../../entities';
import { headers } from '../../entities/Family';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';

const FamilyComponent = () => {

  const [lines, setLines] = useState<Family[]>([]);
  const { setType } = useContext(EditorContext);
  
  useEffect(() => {
    setType(EEditorType.FAMILY);

    fetch(`http://localhost:2810/api/family`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Family(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-full w-full relative overflow-scroll">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default FamilyComponent;
