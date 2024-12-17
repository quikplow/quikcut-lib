// eg. 1000 -> 10.00
export const centsToDollars = (value: number): number => {
  return value / 100;
}

// eg. 10.00 => 1000
export const dollarsToCents = (value: number): number => {
  return Math.round(value * 100);
}

