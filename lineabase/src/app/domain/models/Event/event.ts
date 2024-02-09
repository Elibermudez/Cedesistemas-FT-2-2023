export class Event {
  name!: string
  idCategory!: number
  image!: string
  description!: string
  address!: string
  location!: Location
  price!: number
  date!: string
  place!: string
  idCompany!: string
  availableTickets!: number
  isRemoved!: boolean
  _id!: string
  createdAt!: string
  updatedAt!: string
  lastUpdate!:number
  __v!: number
}

export class Location {
  type!: string
  coordinates!: number[]
}


export class Events {
  events!: Event[]
}
