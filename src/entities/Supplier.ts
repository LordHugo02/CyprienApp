
import { ICustomTable } from '../components/gestion/CustomTable';

export default class Supplier {
  public id: number | undefined = undefined;

  public name: string | undefined = undefined;
  
  public socialReason: string | undefined = undefined;
  
  public address: string | undefined = undefined;
  
  public postalCode: string | undefined = undefined;
  
  public city: string | undefined = undefined;
  
  public country: string | undefined = undefined;
  
  public fax: string | undefined = undefined;
  
  public phone: string | undefined = undefined;
  
  public email: string | undefined = undefined;
  
  public website: string | undefined = undefined;
    
  public company: string | undefined = undefined;

  constructor({ ...props }) {
    this.id = props.id;
    this.name = props.name;
    this.socialReason = props.socialReason;
    this.address = props.address;
    this.postalCode = props.postalCode;
    this.city = props.city;
    this.country = props.country;
    this.fax = props.fax;
    this.phone = props.phone;
    this.email = props.email;
    this.website = props.website;
    this.company = props.company;
  }
}
export interface ISupplierProps extends ICustomTable {
  lines: Supplier[]
}
export interface ISupplierLineProps extends ICustomTable {
  line: Supplier
}

export const headers = {
  'name': 'nom',
  'socialReason': 'raison sociale',
  'address': 'adresse',
  'postalCode': 'code postal',
  'city': 'ville',
  'country': 'pays',
  'fax': 'fax',
  'phone': 'n° téléphone',
  'email': 'email',
  'website': 'site internet',
};