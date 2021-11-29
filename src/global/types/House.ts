export type House = {
  id: number
  imageUrl: string
  address: string
  ratins: Rating[]
}

type Rating = {
  userId: number,
  rating: number
}