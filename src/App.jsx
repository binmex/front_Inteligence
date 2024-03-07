import React from "react";
import { NavPrime } from "./Components/NavPrime";
import { BannerPrime } from "./Components/BannerPrime";
import { FooterPrime } from "./Components/FooterPrime";
import { Centro } from "./Components/Centro";

function App() {
  return (
    <>
      <div className="div-con-fondo">
        <NavPrime />
        <BannerPrime />
        <Centro />
     
      </div>
      <FooterPrime />
    </>
  );
}

export default App;
