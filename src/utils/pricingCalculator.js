export const rates = {
  USD: {
    symbol: "$",
    multiplier: 1,
  },
  EUR: {
    symbol: "€",
    multiplier: 0.92,
  },
  INR: {
    symbol: "₹",
    multiplier: 83,
  },
};

export function calculatePrice(basePrice, billing, currency) {
  let amount = basePrice;

  if (billing === "annual") {
    amount = basePrice * 12 * 0.8;
  }

  amount *= rates[currency].multiplier;

  return {
    symbol: rates[currency].symbol,
    amount: Math.round(amount),
  };
}