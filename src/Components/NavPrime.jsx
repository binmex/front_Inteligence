import React from "react";
import { Menubar } from "primereact/menubar";
import logoUptc from '../Assets/LogoUptc.svg'

export const NavPrime = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Creators",
      icon: "pi pi-star",
    }
  ];
  
  //logo
  const start = (
    <img
      alt="logo"
      src= {logoUptc}
      height="70"
      className="mr-2"
    ></img>
  );


  return (
    <div className="card">
      <Menubar model={items} start={start} />
    </div>
  );
};
