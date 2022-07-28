export interface Iticket {
  id?: number;
  price?: number;
  startPoint?: string;
  endPoint?: string;
  startDate?: string;
  startTime?: string;
  car?: {
    code?: number;
    name?: string;
  };
  count?: number;
}
