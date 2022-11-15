import { useState } from "react";
import "./App.css";
import paw from "./assets/paw@100x.png";
import { Welcome } from "./components/Welcome";
import { NavCompact } from "./components/NavCompact";
import { NavFull } from "./components/NavFull";
import { Services } from "./components/Services";
import { Faq } from "./components/Faq";
import { Events } from "./components/Events";
import { PlayPark } from "./components/PlayPark";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div class="antialiased bg-body text-body font-body bg">
      <div class="">
        <header class="relative overflow-hidden max-w-7xl mx-auto">
          <NavFull setOpen={setOpen} />
          {open ? <NavCompact setOpen={setOpen} /> : <div></div>}
          <Welcome />
        </header>
        <Services />
        <Pricing />
        <Events />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
