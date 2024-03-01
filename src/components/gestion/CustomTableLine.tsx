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
      const iref = baseLinekeys.indexOf(ref);
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
    setItemId(id);
  };

  useEffect(() => {
    handleLineChanges();
  }, []);
  useEffect(() => {
    handleLineChanges();
  }, [line]);

  const editLinkClass = 'absolute text-blue bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all';
  const trClass = 'bg-slate-100 even:bg-slate-200 relative cursor-default productTable group relative';
  return (
    <>
      {
        actualLine && 
      <tr className={trClass}>
        {Object.values(actualLine.content)
          .map(
            (col, i) => <td className='p-2 min-w-28 max-w-xl w-max pb-8' key={i}>{col.content}</td>
          )
        }
        <span className={editLinkClass}>
          <span className='cursor-pointer' onClick={() => handleModify(actualLine.id)}>Modifier</span>|
          <span className='cursor-pointer text-red-500'>Supprimer</span>
        </span>
      </tr>
      }
    </>
  );
};

export default CustomTableLine;
