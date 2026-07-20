import "../foundry/src/tokens/tokens.css";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ledger from "./components/Ledger";
import Toolkit from "./components/Toolkit";
import HowIWork from "./components/HowIWork";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-bg font-body text-text-primary">
      <Nav />
      <Hero />
      <Ledger />
      <Toolkit />
      <HowIWork />
      <Footer />
    </main>
  );
}
