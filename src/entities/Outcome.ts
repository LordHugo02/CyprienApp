
import { ICustomTable } from '../components/gestion/CustomTable';

export default class Outcome {
  public id: number | undefined = undefined;

  public product: number | undefined = undefined;

  public user: number | undefined = undefined;

  public createdAt: Date | undefined = undefined;

  public reason: string | undefined = undefined;

  public out_at: Date | undefined = undefined;

  public quantity: number | undefined = undefined;

  public itemPrice: number | undefined = undefined;

  constructor({ ...props }) {this.id = props.id;
    this.product = props.product;
    this.user = props.user;
    this.createdAt = props.createdAt;
    this.reason = props.reason;
    this.out_at = props.out_at;
    this.quantity = props.quantity;
    this.itemPrice = props.itemPrice;    
  }

  public headers = headers;

}
export interface IOutcomeProps extends ICustomTable {
  lines: Outcome[]
}
export interface IOutcomeLineProps extends ICustomTable {
  line: Outcome
}

export const headers = {
  'product': 'produit',
  'user': 'utilisateur',
  'reason': 'raison',
  'out_at': 'date',
  'quantity': 'quantité',
  'itemPrice': 'prix',
};