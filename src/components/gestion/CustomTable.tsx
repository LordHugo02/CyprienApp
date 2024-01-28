import React from 'react';
import { ISubscriptionProps } from '../../entities/Subscription';
import CustomTableLine from './CustomTableLine';
import { IVatProps } from '../../entities/Vat';

export interface ICustomTable {
  headers: object
}

const CustomTable = ({ lines, headers }: ISubscriptionProps | IVatProps) => {
  return (
    <div className="h-screen w-screen relative">
      <table>
        <thead>
          <tr>
            {Object.entries(headers)
              .map(
                (header, i) => <th className='capitalize px-4 py-2' data-nbColumn={i}>{header[1]}</th>,
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
    </div>

  );
};

export default CustomTable;
