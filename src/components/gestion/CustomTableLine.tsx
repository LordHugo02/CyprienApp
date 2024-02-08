import React, { useContext, useEffect, useState } from 'react';
import { EditorContext } from '../../contexts';

interface ILine {
  id: number,
  slug: string,
  content: string
}
interface IBaseLine {
  line: object,
  headers: object
}

const CustomTableLine = ({ line, headers }: IBaseLine) => {
  const [actualLine, setLine] = useState<ILine[]>([]);
  const { toggleEditor } = useContext(EditorContext);
  
  const handleLineChanges = () => {
    const tempTab: ILine[] = [];
    const refTab = Object.keys(headers);
    const baseLinekeys = Object.keys(line);
    const baseLinevalues = Object.values(line);
    refTab.forEach(ref => {
      const iref = baseLinekeys.indexOf(ref);
      const iid = baseLinekeys.indexOf('id ');
      const temp: ILine = {
        id: baseLinevalues[iid],
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
      tempTab.push(temp);
    });
    setLine(tempTab);
  }
  const handleModify = (ratio: number) => {
    toggleEditor(1)
  }

  useEffect(() => {
    handleLineChanges()
  }, []);
  useEffect(() => {
    handleLineChanges()
  }, [line]);

  const editLinkClass = `absolute text-blue bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all`;
  const trClass = `bg-slate-100 even:bg-slate-200 relative cursor-default productTable group relative`;
  return (
    <tr className={trClass}>
      {Object.values(actualLine)
        .map(
          (col) => {
            console.log(col)
            return (
              <>
                <td className='p-2 min-w-28 max-w-xl w-max pb-8'>{col.content}</td>
                <div className={editLinkClass}>
                  <div className='cursor-pointer' onClick={() => handleModify(1)}>Modifier</div>|
                  <div className='cursor-pointer text-red-500'>Supprimer</div>
                </div>
              </>
            );
          },
        )
      }
    </tr>
  );
};

export default CustomTableLine;
