export type House = {
  id: number
  imageUrl: string
  address: string
  owner: Owner
  ratings: Rating[]
}

type Rating = {
  userId: number
  rating: number
}

type Owner = {
  name: string
  phone: string
  email: string
}