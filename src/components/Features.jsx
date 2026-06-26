import { useEffect, useState } from "react";
import { features } from "../data/features";

export default function Features() {

  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [active, setActive] = useState(0);

  useEffect(() => {

    const resize = () => setMobile(window.innerWidth < 768);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);

  return (

    <section id="features" className="py-28 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-[#FFC801] uppercase tracking-[0.35em] text-sm font-semibold">
            Features
          </p>

          <h2
            className="text-5xl font-bold mt-4"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            Everything You Need
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Powerful AI tools designed to automate, analyze and scale your
            business.
          </p>

        </div>

        {!mobile ? (

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {features.map((feature, index) => (

              <div
                key={feature.id}
                onMouseEnter={() => setActive(index)}
                className={`rounded-3xl p-8 border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  active === index
                    ? "bg-[#114C5A] border-[#FFC801]"
                    : "bg-[#172B36] border-white/10"
                }`}
              >

                <div className="w-14 h-14 rounded-2xl bg-[#114C5A] flex items-center justify-center">

                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 invert"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        ) : (

          <div className="space-y-4 mt-16">

            {features.map((feature, index) => (

              <div
                key={feature.id}
                className="bg-[#172B36] rounded-2xl overflow-hidden border border-white/10"
              >

                <button
                  onClick={() => setActive(index)}
                  className="w-full flex justify-between items-center p-6"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 invert"
                    />

                    <span>{feature.title}</span>

                  </div>

                  <span className="text-xl">
                    {active === index ? "−" : "+"}
                  </span>

                </button>

                {active === index && (

                  <div className="px-6 pb-6 text-gray-400 leading-7">

                    {feature.description}

                  </div>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );
}