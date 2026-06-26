import { useState } from "react";
import { plans } from "../data/pricing";
import PricingCard from "./pricingCard";

export default function Pricing() {

  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  return (

    <section id="pricing" className="py-28 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-[#FFC801] uppercase tracking-[0.35em] text-sm font-semibold">

            Pricing

          </p>

          <h2
            className="text-5xl font-bold mt-4"
            style={{ fontFamily: "JetBrains Mono" }}
          >

            Flexible Plans

          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">

            Switch between billing cycles and currencies instantly.

          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <div className="bg-[#172B36] rounded-xl p-2 flex">

            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-3 rounded-lg transition ${
                billing === "monthly"
                  ? "bg-[#FFC801] text-[#172B36]"
                  : ""
              }`}
            >

              Monthly

            </button>

            <button
              onClick={() => setBilling("annual")}
              className={`px-6 py-3 rounded-lg transition ${
                billing === "annual"
                  ? "bg-[#FFC801] text-[#172B36]"
                  : ""
              }`}
            >

              Annual

            </button>

          </div>

          <select
            className="bg-[#172B36] rounded-xl px-6 py-3 border border-white/10"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >

            <option value="USD">

              USD

            </option>

            <option value="EUR">

              EUR

            </option>

            <option value="INR">

              INR

            </option>

          </select>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {plans.map((plan) => (

            <PricingCard
              key={plan.id}
              plan={plan}
              billing={billing}
              currency={currency}
            />

          ))}

        </div>

      </div>

    </section>

  );

}