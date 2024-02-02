
import { ICustomTable } from '../components/gestion/CustomTable';

export default class Use {
  public id: number | undefined = undefined;

  public name: string | undefined = undefined;
  
  public description: string | undefined = undefined;
  
  public company: number | undefined = undefined;

  constructor({ ...props }) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.company = props.company;
  }
}
export interface IUseProps extends ICustomTable {
  lines: Use[]
}
export interface IUseLineProps extends ICustomTable {
  line: Use
}

export const headers = {
  'name': 'nom',
  'description': 'description',
};