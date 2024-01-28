export class Subscription {
  public id: number | undefined = 0;

  public name: string | undefined = '';

  public duration: number | undefined = 0;

  public price: number | undefined = 0;

  public trial: number | undefined = 0;

  public can_subscribe: boolean | undefined = false;

  constructor({ ...props }) {
    this.id = props.id;
    this.name = props.name;
    this.duration = props.duration;
    this.price = props.price;
    this.trial = props.trial;
    this.can_subscribe = props.can_subscribe;
  }
}