
import { ICustomTable } from '../components/gestion/CustomTable';

export default class Income {
  public id: number | undefined = 0;
  public product: number | undefined = undefined;

  public createdAt: Date | undefined = undefined;

  public reason: string | undefined = undefined;

  public entry_at: Date | undefined = undefined;

  public quantity: number | undefined = undefined;

  public itemPrice: number | undefined = undefined;

  constructor({ ...props }) {
    this.id = props.id;
    this.product = props.product;
    this.createdAt = props.createdAt;
    this.reason = props.reason;
    this.entry_at = props.entry_at;
    this.quantity = props.quantity;
    this.itemPrice = props.itemPrice;
  }

  public headers = headers;

}
export interface IIncomeProps extends ICustomTable {
  lines: Income[]
}
export interface IIncomeLineProps extends ICustomTable {
  line: Income
}

export const headers = {
  'product': 'produit',
  'user': 'utilisateur',
  'supplier': 'fournisseur',
  'reason': 'raison',
  'entry_at': 'date',
  'quantity': 'quantité',
  'itemPrice': 'prix',
};