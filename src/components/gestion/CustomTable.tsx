import React, { useEffect, useState } from 'react';
import CustomTableLine from './CustomTableLine';
import { IStorageProps } from '../../entities/Storage';
import { IVatProps } from '../../entities/Vat';
import { IFamilyProps } from '../../entities/Family';
import { ISupplierProps } from '../../entities/Supplier';
import { IIncomeProps } from '../../entities/Income';
import { IOutcomeProps } from '../../entities/Outcome';
import { IUseProps } from '../../entities/Use';
import { IProductProps } from '../../entities/Product';

export interface ICustomTable {
  headers: object
}

const CustomTable = ({ lines, headers }: IVatProps | IFamilyProps | IStorageProps | ISupplierProps | IIncomeProps | IOutcomeProps | IUseProps | IProductProps) => {
  const [sortRatio, setRatio] = useState(1);
  const [sortedLines, setLines] = useState<any[]>(lines)
  
  const rmSort = (target: HTMLElement) => {
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
      if(th === target) return;
      if(th.classList.contains('asc')) th.classList.remove('asc');
      if(th.classList.contains('desc')) th.classList.remove('desc');
    });
  }

  const handleSortCol = (ev: any|null, slug: string, ratio: number = 1) => {
    if(ev){
      const target = ev.target as HTMLElement;
      rmSort(target);
      if(target.classList.contains('asc') || target.classList.contains('desc')) setRatio((ratio) => ratio *= -1)
      else setRatio(1);
      
      if(sortRatio === 1){
        if(target.classList.contains('desc')) target.classList.replace('desc', 'asc')
        else target.classList.add('asc')
      }else {
        if(target.classList.contains('asc')) target.classList.replace('asc', 'desc')
        else target.classList.add('desc')
      }
    }
    let temp = JSON.parse(JSON.stringify(sortedLines));
    temp.sort((a: any, b: any) => {
      return a[slug as keyof typeof a]! === b[slug as keyof typeof b]! ? 0 : 
        a[slug as keyof typeof a]! > b[slug as keyof typeof b]! ? 1 * sortRatio : -1 * sortRatio
    },
    )
    setLines(temp);
  }

  useEffect(() => {
    setLines(lines);
  }, [lines])

  return (
    <table className='w-max min-w-full overflow-x-scroll z-10 relative table-auto'>
      <thead className='bg-slate-200 sticky z-20 top-0'>
        <tr>
          {Object.entries(headers)
            .map(
              (header) => <th className='cursor-pointer py-2 px-2 pr-10 capitalize sortable relative' onClick={(event) => handleSortCol(event, header[0])}>{header[1]}</th>,
            )
          }
        </tr>
      </thead>
      <tbody>
          {
            sortedLines.map((line: object) => <CustomTableLine line={line} headers={headers} />)
          }
      </tbody>
    </table>
  );
};

export default CustomTable;
