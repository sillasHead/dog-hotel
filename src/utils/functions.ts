export function averageRating(ratings: number[]): string {
  if (ratings.length === 0) {
    return 'Sem avaliação';
  }
  const sum = ratings.reduce((a, b) => a + b, 0);
  return (sum / ratings.length).toFixed(1);
}