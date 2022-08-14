export interface Districts {
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
  };
}
