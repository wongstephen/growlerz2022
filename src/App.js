import { lazy, useRef, useState } from "react";
import "./App.css";
import useFetchStrapi from "./components/hooks/useFetchStrapi";

import { Welcome } from "./components/Welcome";
import { NavCompact } from "./components/NavCompact";
import { NavFull } from "./components/NavFull";
import { Services } from "./components/Services";
import { Faq } from "./components/Faq";
import { Events } from "./components/Events";
import { Pricing } from "./components/Pricing";
import { ToTop } from "./components/ToTop";
import { Alert } from "./components/Alert";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);
  const { data: hourData } = useFetchStrapi("business-hour/");
  const { data: priceData } = useFetchStrapi("price/");
  const { data: alertData } = useFetchStrapi("alert/");

  // Refs for each section.
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

  return (
    <div className="antialiased bg-body text-body font-body bg">
      <header className="relative mx-auto overflow-hidden max-w-7xl">
        <NavFull setOpen={setOpen} open={open} scrollTo={scrollTo} />
        <NavCompact setOpen={setOpen} open={open} scrollTo={scrollTo} />
        {alertData?.data && <Alert data={alertData.data} />}
        <Welcome />
      </header>
      <main>
        <span ref={servicesRef}>
          <Services hours={hourData} />
        </span>
        <span ref={pricingRef}>
          <Pricing price={priceData} />
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
      </main>
      <footer>
        <Footer hours={hourData} scrollTo={scrollTo} />
      </footer>
      <ToTop />
    </div>
  );
}

export default App;
