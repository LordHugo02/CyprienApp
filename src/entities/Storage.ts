
import { ICustomTable } from '../components/gestion/CustomTable';

export default class Storage {
  public id: number | undefined = 0;

  public slug: string | undefined = undefined;
  
  public description: string | undefined = undefined;
  
  public company: string | undefined = undefined;

  constructor({ ...props }) {
    this.id = props.id;
    this.slug = props.slug;
    this.description = props.description;
    this.company = props.company;
  }

  public headers = headers;

}
export interface IStorageProps extends ICustomTable {
  lines: Storage[]
}
export interface IStorageLineProps extends ICustomTable {
  line: Storage
}

export const headers = {
  'slug': 'emplacement',
  'description': 'description',
};