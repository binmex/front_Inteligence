import React from "react";
import logoUptc from "../Assets/LogoUptc.svg";

export const FooterPrime = () => {
  return (
    <div className="footer-div">
      <div className="logo-info">
        <img alt="logo" src={logoUptc} height="80" className="mr-2"></img>
        <p>
        Proyecto desarrollado para la materia de inteligencia computacional.
        </p>
        <p><strong>2024</strong></p>
      </div>

      <div className="more-info">
        {/** Aquí puedes agregar más información del footer */}
        <h3>Contactos</h3>
        <ul>
        <li>
            <a href="https://www.uptc.edu.co/sitio/portal/">UPTC</a>
          </li>
          <li>
            <a href="https://github.com/binmex">Robinson Aguilar</a>
          </li>
          <li>
            <a href="https://github.com/Lauragranados2021">Laura Granados</a>
          </li>
          <li>
            <a href="https://github.com/Yesid-r">Yesid Rincon</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
