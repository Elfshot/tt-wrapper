export type Vehicles<T = Vehicle> = T[]

export interface Vehicle {
  name: string
  price: number
  model: string
}

export type VehicleTypes = 'Premium' | 'Offroad' | 'Special' | 'Muscle' | 'Sport Classics' | 'SUVs' | 
'Sedans' | 'Sports' | 'Coupes' | 'Motorcycles' | 'Lowriders' | 'Supercars' | 'Compacts' | 'Vans';

export interface Dealership<T = Vehicle> {
  'Premium'?: Vehicles<T>
  'Offroad'?: Vehicles<T>
  'Special'?: Vehicles<T>
  'Muscle'?: Vehicles<T>
  'Sport Classics'?: Vehicles<T>
  'SUVs'?: Vehicles<T>
  'Sedans'?: Vehicles<T>
  'Sports'?: Vehicles<T>
  'Coupes'?: Vehicles<T>
  'Motorcycles'?: Vehicles<T>
  'Lowriders'?: Vehicles<T>
  'Supercars'?: Vehicles<T>
  'Compacts'?: Vehicles<T>
  'Vans'?: Vehicles<T>
}