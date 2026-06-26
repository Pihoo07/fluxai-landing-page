import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#0B1220] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <TrustedBy />

      <Features />

      <Pricing />

      <Footer />

    </main>
  );
}

export default App;