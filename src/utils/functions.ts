export function averageRating(ratings: number[]): number {
  const sum = ratings.reduce((a, b) => a + b, 0);
  return sum / ratings.length;
}