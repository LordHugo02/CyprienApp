import { ICustomTable } from '../components/gestion/CustomTable';

export default class Vat {
  public id: number | undefined = 0;

  public name: string | undefined = '';

  public rate: number | undefined = 0;


  constructor({ ...props }) {
    this.id = props.id;
    this.name = props.name;
    this.rate = props.rate;
  }
}
export interface IVatProps extends ICustomTable {
  lines: Vat[]
}
export interface IVatLineProps extends ICustomTable {
  line: Vat
}