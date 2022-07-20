export interface Icustomer {
  id:number;
  code:string;
  name:string;
  customerType: {
    id: number;
    name: string;
  };
  birthday:string;
  gender:number;
  idCard:string;
  phone:string;
  email:string;
  address:string;
}
