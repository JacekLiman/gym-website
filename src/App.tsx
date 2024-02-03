import { useState } from "react";
import Banner from "./component/Banner";
import Header from "./component/Header";
import NavMobile from "./component/NavMobile";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Header isOpen={isOpen}  setIsOpen={setIsOpen} />
      <Banner />
      <NavMobile isOpen={isOpen} />
    </div>
  );
}

export default App;
