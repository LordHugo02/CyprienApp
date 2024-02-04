import React, { useContext, useEffect, useState } from 'react';
import CustomTable from './CustomTable';
import { Income } from '../../entities';
import { headers } from '../../entities/Income';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';

const IncomeComponent = () => {

  const [lines, setLines] = useState<Income[]>([]);
  const { setType } = useContext(EditorContext);
  
  useEffect(() => {
    setType(EEditorType.INCOME);
    
    fetch(`http://localhost:2810/api/income`)
      .then(res => res.json())
      .then(
        (result) => setLines(result.map((item:object) => new Income(item))),
        (error) => console.log('== ERROR ====', error),
      );
  }, []);

  return (
    <div className="h-full w-full relative">
        <CustomTable lines={lines} headers={headers}/>
    </div>
  );
};

export default IncomeComponent;
