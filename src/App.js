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
  const pricingRef = useRef();
  const eventsRef = useRef();
  const faqRef = useRef();
  const contactRef = useRef();
  const scrollTo = (key) => {
    switch (key) {
      case "servicesRef":
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "pricingRef":
        pricingRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "eventsRef":
        eventsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "faqRef":
        faqRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contactRef":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
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
          <NavFull setOpen={setOpen} open={open} scrollTo={scrollTo} />
          <NavCompact setOpen={setOpen} open={open} scrollTo={scrollTo} />
          <Welcome />
        </header>
        <span ref={servicesRef}>
          <Services
            data={
              pageData && pageData.filter((obj) => obj.id === 145)[0]["acf"]
            }
          />
        </span>
        <span ref={pricingRef}>
          <Pricing
            data={
              pageData && pageData.filter((obj) => obj.id === 131)[0]["acf"]
            }
          />
        </span>
        <span ref={eventsRef}>
          <Events />
        </span>
        <span ref={faqRef}>
          <Faq />
        </span>
        <span ref={contactRef}>
          <Contact />
        </span>
        <Footer
          data={pageData && pageData.filter((obj) => obj.id === 145)[0]["acf"]}
          scrollTo={scrollTo}
        />
        <ToTop />
      </div>
    </div>
  );
}

export default App;
