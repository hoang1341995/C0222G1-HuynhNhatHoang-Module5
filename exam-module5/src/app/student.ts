export interface Student {
  id?: number;
  name?: string;
  birthday?: string;
  email?: string;
  phone?: string;
  class?: {
    id?: number;
    name?: string;
  };
}
