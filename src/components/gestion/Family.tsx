import React, { useContext, useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Family } from '../../entities';
import { headers } from '../../entities/Family';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';
// import { EEditorType } from '../../contexts/EditorContext';

const Stock = ({ api_url = 'http://localhost' }: any) => {

  const [lines, setLines] = useState<Family[]>([]);
  const { setType } = useContext(EditorContext);
  
  useEffect(() => {
    setType(EEditorType.FAMILY);

    fetch(`${api_url}:2810/api/family`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Family(item))),
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
