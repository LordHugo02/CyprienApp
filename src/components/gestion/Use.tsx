import React, { useContext, useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Use } from '../../entities';
import { headers } from '../../entities/Use';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';

const UseComponent = () => {

  const [lines, setLines] = useState<Use[]>([]);
  const { setType } = useContext(EditorContext);
  
  useEffect(() => {
    setType(EEditorType.USE);
    fetch(`http://localhost:2810/api/use`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Use(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, );

  return (
    <div className="h-full w-full relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default UseComponent;
