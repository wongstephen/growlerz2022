import { useEffect, useState } from "react";
import "./App.css";

import { Welcome } from "./components/Welcome";
import { NavCompact } from "./components/NavCompact";
import { NavFull } from "./components/NavFull";
import { Services } from "./components/Services";
import { Faq } from "./components/Faq";
import { Events } from "./components/Events";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { wpPages } from "./api/wp";
import { ToTop } from "./components/ToTop";

function App() {
  const [open, setOpen] = useState(false);
  const [pageData, setPageData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await wpPages();
      setPageData(res);
    };
    getData();
  }, []);

  return (
    <div class="antialiased bg-body text-body font-body bg">
      <div class="">
        <header class="relative overflow-hidden max-w-7xl mx-auto">
          <NavFull setOpen={setOpen} open={open} />
          <NavCompact setOpen={setOpen} open={open} />
          <Welcome />
        </header>
        <Services
          data={
            pageData && pageData.filter((obj) => obj.id === 99)[0]["x_metadata"]
          }
        />
        <Pricing data={pageData} />
        <Events />
        <Faq />
        <Contact />
        <Footer />
        <ToTop />
      </div>
    </div>
  );
}

export default App;
