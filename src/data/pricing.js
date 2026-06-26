export const plans = [
  {
    id: "starter",
    name: "Starter",
    basePrice: 19,
    description: "Perfect for individuals.",
    features: [
      "5 Projects",
      "Unlimited Tasks",
      "Email Support"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    basePrice: 49,
    description: "Built for growing teams.",
    features: [
      "Unlimited Projects",
      "AI Automation",
      "Priority Support"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    basePrice: 99,
    description: "For large organizations.",
    features: [
      "Unlimited Everything",
      "Dedicated Manager",
      "24/7 Support"
    ]
  }
];

export const currencyRates = {
  INR: { symbol: "₹", multiplier: 83 },
  USD: { symbol: "$", multiplier: 1 },
  EUR: { symbol: "€", multiplier: 0.92 }
};