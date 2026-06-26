import { memo, useMemo } from "react";
import { calculatePrice } from "../utils/pricingCalculator";

const PricingCard = memo(function PricingCard({
  plan,
  billing,
  currency,
}) {

  const price = useMemo(() => {
    return calculatePrice(
      plan.basePrice,
      billing,
      currency
    );
  }, [plan.basePrice, billing, currency]);

  return (

    <div className="bg-[#172B36] rounded-3xl border border-white/10 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <h3 className="text-3xl font-bold">

        {plan.name}

      </h3>

      <p className="text-gray-400 mt-3">

        {plan.description}

      </p>

      <div className="mt-10">

        <span className="text-6xl font-bold">

          {price.symbol}

          {price.amount}

        </span>

        <span className="text-gray-400 ml-2">

          /{billing === "monthly" ? "mo" : "yr"}

        </span>

      </div>

      <ul className="space-y-4 mt-10">

        {plan.features.map((feature) => (

          <li key={feature}>

            ✓ {feature}

          </li>

        ))}

      </ul>

      <button className="mt-12 w-full bg-[#FFC801] text-[#172B36] py-4 rounded-xl font-semibold hover:bg-[#FF9932] transition-all duration-200 hover:scale-105">

        Get Started

      </button>

    </div>

  );

});

export default PricingCard;