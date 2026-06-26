import cog from "../assets/SVGs/cog-8-tooth.svg";
import chartPie from "../assets/SVGs/chart-pie.svg";
import link from "../assets/SVGs/link.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-20"
    >

      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-[#FFC801] uppercase tracking-[0.35em] text-sm font-semibold">

              AI AUTOMATION PLATFORM

            </p>

            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight mt-6"
              style={{ fontFamily: "JetBrains Mono" }}
            >

              Power Your
              <br />
              Future With AI

            </h1>

            <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">

              Automate repetitive workflows,
              integrate your business tools,
              and unlock enterprise-grade AI
              automation with one unified platform.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-[#FFC801] text-[#172B36] px-8 py-4 rounded-xl font-semibold hover:bg-[#FF9932] hover:scale-105 transition-all duration-200">

                Start Free Trial

              </button>

              <button className="border border-white/20 px-8 py-4 rounded-xl hover:border-[#FFC801] hover:text-[#FFC801] transition-all duration-200">

                Documentation

              </button>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute w-[420px] h-[420px] bg-[#FFC801]/10 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col gap-6">

              <div className="float w-80 bg-[#172B36] border border-white/10 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition-all">

                <div className="flex justify-between">

                  <span className="text-gray-400">

                    Automation

                  </span>

                  <img
                    src={cog}
                    alt="Automation icon"
                    className="w-8 h-8 invert"
                  />

                </div>

                <h2 className="text-5xl font-bold mt-4">

                  99.9%

                </h2>

                <p className="text-gray-400 mt-3">

                  Platform Uptime

                </p>

              </div>

              <div
                className="float w-80 ml-12 bg-[#172B36] border border-white/10 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition-all"
                style={{ animationDelay: "1s" }}
              >

                <div className="flex justify-between">

                  <span className="text-gray-400">

                    Analytics

                  </span>

                  <img
                    src={chartPie}
                    alt="Analytics icon"
                    className="w-8 h-8 invert"
                  />

                </div>

                <h2 className="text-5xl font-bold mt-4">

                  24M+

                </h2>

                <p className="text-gray-400 mt-3">

                  API Requests

                </p>

              </div>

              <div
                className="float w-80 bg-[#172B36] border border-white/10 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition-all"
                style={{ animationDelay: "2s" }}
              >

                <div className="flex justify-between">

                  <span className="text-gray-400">

                    Integrations

                  </span>

                  <img
                    src={link}
                    alt="Integrations icon"
                    className="w-8 h-8 invert"
                  />

                </div>

                <h2 className="text-5xl font-bold mt-4">

                  300+

                </h2>

                <p className="text-gray-400 mt-3">

                  Connected Platforms

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}