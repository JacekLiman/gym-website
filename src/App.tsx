import { useState, useEffect } from "react";
import Banner from "./component/Banner";
import Header from "./component/Header";
import NavMobile from "./component/NavMobile";
import About from "./component/About";
import Workout from "./component/Workout";
import Pricing from "./component/Pricing";
import Community from "./component/Community";
import Faq from "./component/Faq";
import Join from "./component/Join";
import Footer from "./component/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto relative overflow-hidden">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
      <NavMobile isOpen={isOpen} />
      <About />
      <Workout />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
