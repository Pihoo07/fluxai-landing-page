export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#114C5A]/80 border-b border-white/10">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <a
          href="#home"
          className="text-3xl font-bold tracking-wide"
          style={{ fontFamily: "JetBrains Mono" }}
        >
          Flux<span className="text-[#FFC801]">AI</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">

          <li>
            <a
              href="#features"
              className="hover:text-[#FFC801] transition"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#pricing"
              className="hover:text-[#FFC801] transition"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-[#FFC801] transition"
            >
             Contact
            </a>
          </li>

        </ul>

        <button className="bg-[#FFC801] text-[#172B36] px-6 py-3 rounded-xl font-semibold hover:bg-[#FF9932] hover:scale-105 transition-all duration-200">

          Start Free Trial

        </button>

      </nav>

    </header>
  );
}