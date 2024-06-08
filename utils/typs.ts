export interface varientType {
  id?: number;
  color: string;
  specification: string;
  size: string;
  product_id?: number;
  created_at?: string;
  updated_at?: string;
}

export interface productType {
  id?: number;
  name: string;
  brand: string;
  type: string;
  origin: string;
  created_at?: string;
  updated_at?: string;
  variants?: varientType[];
}

export interface orderDatailsType {
  variant_id: number;
  quantity: number;
}

export interface orderType {
  id?: number;
  name: string;
  email: string;
  address: string;
  total_quantity: number;
  created_at?: string;
  updated_at?: string;
  details: orderDatailsType[];
}
