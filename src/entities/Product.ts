import { ICustomTable } from '../components/gestion/CustomTable';

export default class Product {
  public id: number | undefined = undefined;

  public name: string | undefined = undefined;

  public description: string | undefined = undefined;

  public reference: string | undefined = undefined;

  public barcode: string | undefined = undefined;

  public webLink: string | undefined = undefined;

  public price_ht: number | undefined = undefined;

  public quantity: number | undefined = undefined;

  public quantity_base: number | undefined = undefined;

  public quantity_mini: number | undefined = undefined;

  public createdAt: string | undefined = undefined;

  public updatedAt: string | undefined = undefined;

  public family: string | undefined = undefined;

  public supplier: string | undefined = undefined;

  public use: string | undefined = undefined;

  public storage: string | undefined = undefined;

  public unit: string | undefined = undefined;

  public vat: string | undefined = undefined;

  constructor({ ...props }) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.reference = props.reference;
    this.barcode = props.barcode;
    this.webLink = props.webLink;
    this.price_ht = props.price_ht;
    this.quantity = props.quantity;
    this.quantity_base = props.quantity_base;
    this.quantity_mini = props.quantity_mini;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.family = props.family;
    this.supplier = props.supplier;
    this.use = props.use;
    this.storage = props.storage;
    this.unit = props.unit;
    this.vat = props.vat;
    
  }

  public headers = headers;

}
export interface IProductProps extends ICustomTable {
  lines: Product[]
}
export interface IProductLineProps extends ICustomTable {
  line: Product
}
export const headers = {
  'name': 'nom',
  'description': 'description',
  'reference': 'référence',
  'barcode': 'code-barre',
  'webLink': 'url',
  'price_ht': 'prix HT',
  'quantity': 'quantité',
  'quantity_base': 'quantité de base',
  'quantity_mini': 'quantité mini',
  'createdAt': 'date de création',
  'updatedAt': 'date de dernière mise à jour',
  'family': 'famille',
  'supplier': 'fournisseur',
  'use': 'usage',
  'storage': 'emplacement',
  'unit': 'unité',
  'vat': 'tva',
};