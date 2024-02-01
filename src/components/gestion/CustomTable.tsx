import React, { useState } from 'react';
import { ISubscriptionProps } from '../../entities/Subscription';
import CustomTableLine from './CustomTableLine';
import { IVatProps } from '../../entities/Vat';
import { IFamilyProps } from '../../entities/Family';
import { IStorageProps } from '../../entities/Storage';
import { ISupplierProps } from '../../entities/Supplier';
import { IIncomeProps } from '../../entities/Income';

export interface ICustomTable {
  headers: object
}

const CustomTable = ({ lines, headers }: ISubscriptionProps | IVatProps | IFamilyProps | IStorageProps | ISupplierProps | IIncomeProps) => {
  const [sortRatio, setRatio] = useState(1);
  
  const rmSort = (target: HTMLElement) => {
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
      if(th === target) return;
      if(th.classList.contains('asc')) th.classList.remove('asc');
      if(th.classList.contains('desc')) th.classList.remove('desc');
    });
  }

  const handlesortCol = (ev: any|null, slug: string, ratio: number = 1) => {
    if(ev){
      console.log('event OK');
      
      const target = ev.target as HTMLElement;
      rmSort(target);
      if(target.classList.contains('asc') || target.classList.contains('desc')) setRatio((ratio) => ratio * -1)
      else setRatio(1);
      
      if(sortRatio === 1){
        if(target.classList.contains('desc')) target.classList.replace('desc', 'asc')
        else target.classList.add('asc')
      }else {
        if(target.classList.contains('asc')) target.classList.replace('asc', 'desc')
        else target.classList.add('desc')
      }
    }
    
    lines.sort((a, b) =>
    a[slug as keyof typeof a]! === b[slug as keyof typeof b]! ? 0 : 
      a[slug as keyof typeof a]! > b[slug as keyof typeof b]! ? 1 : -1,
    )
  }

  return (
    <table className='w-max min-w-full overflow-x-scroll z-10 relative'>
      <thead className='bg-slate-200 sticky z-20 top-0'>
        <tr>
          {Object.entries(headers)
            .map(
              (header) => <th className='cursor-pointer py-2 px-2 pr-10 capitalize sortable relative' onClick={(event) => handlesortCol(event, header[0])}>{header[1]}</th>,
            )
          }
        </tr>
      </thead>
      <tbody>
          {
            lines.map((line: object) => <CustomTableLine line={line} headers={headers} />)
          }
      </tbody>
    </table>
  );
};

export default CustomTable;
