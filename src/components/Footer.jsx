export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 mt-28"
    >
      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              Flux<span className="text-[#FFC801]">AI</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Enterprise AI automation platform helping teams
              automate workflows, analyze insights and scale faster.
            </p>

          </div>

          <div className="flex gap-8 text-gray-400">

            <a href="#home" className="hover:text-[#FFC801] transition">
              Home
            </a>

            <a href="#features" className="hover:text-[#FFC801] transition">
              Features
            </a>

            <a href="#pricing" className="hover:text-[#FFC801] transition">
              Pricing
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-500">

          © 2026 FluxAI. Built with React & Tailwind CSS.

        </div>

      </div>
    </footer>
  );
}