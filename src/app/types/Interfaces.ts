export interface Building {
  id: number;
  name: string;
}

export interface Apartment {
  id: number;
  name: string;
  buildingId: number;
}

export interface Picture{
  id:number,
  name: string,
  url: string,
  type: string
}

export interface Property {
  id: number;
  name: string;
  address?: string;
  state?:string;
  zipCode?: string;
}


export interface AccessRecord {
  id?: number;
  accessTime: string;
  visitor: Visitor;
  pictures?: Picture[];
}


export interface Visitor {
  id?: number;
  firstName: string;
  lastName: string;
  identification: number;
  building?: string;
  apartment?: string;
  carPlates?: string;
  property: Property;
  createdAt: string;
  pictures?: Picture[];
  cars: Car[];
  type:string
}
export interface Car {
  id?: number;
  plate: string;
}
