
export interface Icustomer {
  id?: number;
  code?: string;
  fullName?: string;
  birthDay?: string;
  gender?: number;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  typeCustomer?: {
    id: number;
    name: string;
  };
}
