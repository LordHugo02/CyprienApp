import React, { useContext, useEffect, useState } from 'react';
import GeneralContext from '../../contexts/GeneralContext';


interface ILineContent {
  slug: string,
  content: string
}
interface ILine {
  id: number,
  content: ILineContent[]
}
interface IBaseLine {
  line: object,
  headers: object
}
interface ILineRef {
  id: number
}

const CustomTableLine = ({ line, headers }: IBaseLine) => {
  const [actualLine, setLine] = useState<ILine>();
  const { setItemId } = useContext(GeneralContext);
  const { toggleEditor } = useContext(GeneralContext);
  
  const handleLineChanges = () => {
    const tempLine = line as ILineRef;
    const tempTab: ILine = {
      id: tempLine.id,
      content: []
    };
    
    const refTab = Object.keys(headers);
    const baseLinekeys = Object.keys(line);
    const baseLinevalues = Object.values(line);
    refTab.forEach(ref => {
      const iref = baseLinekeys.indexOf('_'+ref);
      const temp: ILineContent = {
        slug: ref,
        content: baseLinevalues[iref],
      };
      
      if (temp.slug === 'price') {
        if (temp.content === '0')
          temp.content = 'gratuit';
        else
          temp.content = (parseInt(temp.content, 10) / 100) + ' €';
      } else if (temp.slug === 'rate') {
        temp.content = (parseInt(temp.content, 10) / 100) + ' %';
      }
      tempTab.content.push(temp);
    });
    setLine(tempTab);
  };
  const handleModify = (id: number) => {
    toggleEditor(true);
    if(id == -1) return;
    setItemId(id);
  };

  useEffect(() => {
    handleLineChanges();
  }, []);
  useEffect(() => {
    handleLineChanges();
  }, [line]);

  const linkClasses = 'absolute text-blue bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all';
  const cellClasses = 'cursor-default p-2 min-w-28 pb-8';
  return (
    <>
      {
        actualLine && 
          Object.values(actualLine.content)
            .map(
              (col, i) => {
                return (
                  <div className={cellClasses} key={i}>
                    {col.content}
                  </div>
                );
              }
            )
      }
      <span className={linkClasses} onClick={() => handleModify(actualLine ? actualLine.id : -1)}>
        <span className='cursor-pointer text-blue'>Modifier</span> | <span className='cursor-pointer text-red-400'>Supprimer</span>
      </span>
    </>
  );
};

export default CustomTableLine;
