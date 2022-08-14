export interface City {
  code?: number;
  codename?: string;
  districts?: {
    code?: number;
    codename?: string;
    division_type?: string;
    short_codename?: string;
    wards?: {
      code?: number;
      codename?: string;
      division_type?: string;
      name?: string;
      short_codename?: string;
    }
  };
  division_type?: string;
  name?: string;
  phone_code?: number;
}
