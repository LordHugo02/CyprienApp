export default class Storage {
  public id: number = -1;

  private _slug: string | undefined = undefined;
  
  private _description: string | undefined = undefined;
  
  public company: string | undefined = undefined;

  constructor({ ...props }) {
    this.id = props.id;
    this.slug = props.slug;
    this.description = props.description;
    this.company = props.company;
  }

  public headers = {
    'slug': 'emplacement',
    'description': 'description',
  };
  public set slug(val: string){
    this._slug = val;
  }
  public get slug(){
    return this._slug || '';
  }
  // -----
  public set description(val: string){
    this._description = val;
  }
  public get description(){
    return this._description || '';
  }
  // -----

  public async getById(id: number){
    return await fetch(`${process.env.REACT_APP_API_URL}/storage/${id}`)
      .then(res => res.json());
  }
  public async getAllByCompanyId(){
    return await fetch(`${process.env.REACT_APP_API_URL}/storage?company=${process.env.REACT_APP_COMPANY_ID}`)
      .then(res => res.json());
  }
}