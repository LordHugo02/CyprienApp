import React, { useEffect, useState } from 'react';
import CustomTableLine from './CustomTableLine';
import { IStorageProps } from '../../interfaces/IStorage';

const CustomTable = ({ lines, headers }: IStorageProps) => {
  const [sortRatio, setRatio] = useState(1);
  const [sortedLines, setLines] = useState<object[]>([]);
  
  const rmSort = (target: HTMLElement) => {
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
      if(th === target) return;
      if(th.classList.contains('asc')) th.classList.remove('asc');
      if(th.classList.contains('desc')) th.classList.remove('desc');
    });
  };

  const handleSortCol = (ev: React.MouseEvent|null, slug: string, wantedRatio: number = 1) => {
    if(ev){
      const target = ev.target as HTMLElement;
      rmSort(target);
      if(target.classList.contains('asc') || target.classList.contains('desc')) setRatio((ratio) => ratio *= -1);
      else setRatio(wantedRatio);
      
      if(sortRatio === 1){
        if(target.classList.contains('desc')) target.classList.replace('desc', 'asc');
        else target.classList.add('asc');
      }else {
        if(target.classList.contains('asc')) target.classList.replace('asc', 'desc');
        else target.classList.add('desc');
      }
    }
    const temp = JSON.parse(JSON.stringify(lines));
    temp.sort((a: object, b: object) => {
      return a[slug as keyof typeof a]! === b[slug as keyof typeof b]! ? 0 : 
        a[slug as keyof typeof a]! > b[slug as keyof typeof b]! ? 1 * sortRatio : -1 * sortRatio;
    },
    );
    setLines(temp);
  };

  useEffect(() => {
    handleSortCol(null, 'name');
    
  }, []);
  
  useEffect(() => {
    handleSortCol(null, 'name');
  }, [lines]);

  const commonClasses = 'flex flex-row *:w-full';
  const lineClasses = 'border-black border-b last:border-none group relative';
  const headerClasses = 'bg-slate-100 rounded-lg p-2';

  return (
    <>
      <div className='flex flex-col items-stretch'>
        <div className={commonClasses+' '+headerClasses}>
          {Object.entries(headers)
            .map(
              (header) => <div className='cursor-pointer py-2 px-2 pr-10 capitalize sortable relative' onClick={(event) => handleSortCol(event, header[0])} key={header[0]}>{header[1]}</div>,
            )
          }
        </div>
        {
          sortedLines.map((line: object, i) => {
            return (
              <div className={commonClasses+' '+lineClasses} key={i}>
                <CustomTableLine line={line} headers={headers} />
              </div>
            );
          })
        }
      </div>
      {/* <table className='w-max min-w-full overflow-x-scroll z-10 relative table-auto'>
        <thead className='bg-slate-200 sticky z-20 top-0 rounded-2xl'>
          <tr>
            {Object.entries(headers)
              .map(
                (header) => <th className='cursor-pointer py-2 px-2 pr-10 capitalize sortable relative' onClick={(event) => handleSortCol(event, header[0])} key={header[0]}>{header[1]}</th>,
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            sortedLines.map((line: object, i) => <CustomTableLine line={line} headers={headers} key={i} />)
          }
        </tbody>
      </table> */}
    </>
  );
};

export default CustomTable;
