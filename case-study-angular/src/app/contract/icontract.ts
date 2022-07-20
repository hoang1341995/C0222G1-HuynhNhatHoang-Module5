export interface Icontract {
  contractId:number;
  startDate:string;
  endDate:string;
  deposit:number;
  employee:string;
  customer: {
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
  };
  service: {
    id:number;
    code:string;
    name:string;
    area: number;
    maxPeople:number;
    rentType:{
      id:number;
      name:string;
      rentTypeCost:number;
    };
    serviceType:{
      id:number;
      name:string;
    };
    standardRoom:string;
    poolArea:number;
    floor:number;
    serviceCost:number;
    description:string;
  };
  totalCost:number;
}
