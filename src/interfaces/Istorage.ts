import Storage from '../models/Storage';
import { ICustomTable } from './ICustomTable';

export interface IStorageProps extends ICustomTable {
  lines: Storage[]
}
export interface IStorageLineProps extends ICustomTable {
  line: Storage
}