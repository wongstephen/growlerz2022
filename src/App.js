import { useEffect, useRef, useState } from "react";
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

  const servicesRef = useRef();
  const servicesScroll = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // const pricingRef = useRef();
  // const eventsRefs = useRef();
  // const faqRefs = useRef();
  // const contactRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const res = await wpPages();
      setPageData(res);
    };
    getData();
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body bg">
      <div className="">
        <header className="relative mx-auto overflow-hidden max-w-7xl">
          <NavFull
            setOpen={setOpen}
            open={open}
            servicesScroll={servicesScroll}
          />
          <NavCompact setOpen={setOpen} open={open} />
          <Welcome />
        </header>
        <span ref={servicesRef}>
          <Services
            data={
              pageData && pageData.filter((obj) => obj.id === 145)[0]["acf"]
            }
          />
        </span>
        <Pricing
          data={pageData && pageData.filter((obj) => obj.id === 131)[0]["acf"]}
        />
        <Events />
        <Faq />
        <Contact />
        <Footer
          data={pageData && pageData.filter((obj) => obj.id === 145)[0]["acf"]}
        />
        <ToTop />
      </div>
    </div>
  );
}

export default App;
