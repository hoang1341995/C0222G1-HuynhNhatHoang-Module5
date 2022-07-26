export interface Iservice {
  id: number;
  code: string;
  name: string;
  area: number;
  maxPeople: number;
  rentType: {
    id: number;
    name: string;
    rentTypeCost: number;
  };
  serviceType: {
    id: number;
    name: string;
  };
  standardRoom: string;
  poolArea: number;
  floor: number;
  serviceCost: number;
  description: string;
}
