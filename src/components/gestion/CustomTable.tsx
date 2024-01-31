import React from 'react';
import { ISubscriptionProps } from '../../entities/Subscription';
import CustomTableLine from './CustomTableLine';
import { IVatProps } from '../../entities/Vat';
import { IFamilyProps } from '../../entities/Family';
import { IStorageProps } from '../../entities/Storage';

export interface ICustomTable {
  headers: object
}

const CustomTable = ({ lines, headers }: ISubscriptionProps | IVatProps | IFamilyProps | IStorageProps) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.entries(headers)
            .map(
              (header) => <th className='capitalize px-4 py-2' data-colslug={header[0]}>{header[1]}</th>,
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
