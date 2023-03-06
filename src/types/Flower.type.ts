export interface Flowers {
  title: string, 
  image: string, 
  name: string,
  flowers: IFlower[]
}

export interface IFlower {
  name: string, 
  price: number, 
  image: string,
  description: string,
  count?: number,
  id?: number,
}