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

  public headers = {
    'slug': 'emplacement',
    'description': 'description',
  };

  public async getById(id: number){
    return await fetch(`${process.env.REACT_APP_API_URL}/storage/${id}`)
      .then(res => res.json());
  }
  public async getAllByCompanyId(){
    return await fetch(`${process.env.REACT_APP_API_URL}/storage?company=${process.env.REACT_APP_COMPANY_ID}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        
        return res;
      });
  }
}