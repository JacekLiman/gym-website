import { useState } from "react";
import Banner from "./component/Banner";
import Header from "./component/Header";
import NavMobile from "./component/NavMobile";
import About from "./component/About";
import Workout from "./component/Workout";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Header isOpen={isOpen}  setIsOpen={setIsOpen} />
      <Banner />
      <NavMobile isOpen={isOpen} />
      <About/>
      <Workout/>
    </div>
  );
}

export default App;
