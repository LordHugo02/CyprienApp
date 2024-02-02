
import { ICustomTable } from '../components/gestion/CustomTable';

export default class Family {
  public id: number | undefined = 0;

  public name: string | undefined = undefined;
  
  public description: string | undefined = undefined;
  
  public company: string | undefined = undefined;

  constructor({ ...props }) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.company = props.company;
  }

  public headers = headers;
}
export interface IFamilyProps extends ICustomTable {
  lines: Family[]
}
export interface IFamilyLineProps extends ICustomTable {
  line: Family
}

export const headers = {
  'name': 'nom',
  'description': 'description',
};