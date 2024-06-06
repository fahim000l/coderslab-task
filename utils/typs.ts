export interface varientType {
  color: string;
  specification: string;
  size: string;
}

export interface productType {
  id: number;
  name: string;
  brand: string;
  type: string;
  orizin: string;
  created_at: string;
  updated_at: string;
  variants: varientType[];
}

export interface orderDatailsType {
  variant_id: number;
  quantity: number;
}

export interface orderType {
  name: string;
  email: string;
  address: string;
  total_quantity: number;
  details: orderDatailsType[];
}
