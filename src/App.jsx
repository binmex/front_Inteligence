import React from "react";
import { NavPrime } from "./Components/NavPrime";
import { BannerPrime } from "./Components/BannerPrime";
import { FooterPrime } from "./Components/FooterPrime";

function App() {
  return (
    <>
      <div className="div-con-fondo">
        <NavPrime />
        <BannerPrime />
      </div>
      <FooterPrime />
    </>
  );
}

export default App;
