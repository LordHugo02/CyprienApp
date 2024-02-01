import React, { useEffect, useState } from 'react';

interface ILine {
  slug: string,
  content: string
}
interface IBaseLine {
  line: object,
  headers: object
}

const CustomTableLine = ({ line, headers }: IBaseLine) => {
  const [actualLine, setLine] = useState<ILine[]>([]);
  
  useEffect(() => {
    const tempTab: ILine[] = [];
    const refTab = Object.keys(headers);
    const baseLinekeys = Object.keys(line);
    const baseLinevalues = Object.values(line);
    refTab.forEach(ref => {
      const i = baseLinekeys.indexOf(ref);
      const temp: ILine = {
        slug: ref,
        content: baseLinevalues[i],
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
  }, []);

  return (
    <tr className='bg-slate-100 even:bg-slate-200 relative cursor-default productTable'>
      {Object.values(actualLine)
        .map(
          (col) => <td className='p-2 min-w-28 max-w-xl w-max'>{col.content}</td>,
        )
      }
    </tr>
  );
};

export default CustomTableLine;
