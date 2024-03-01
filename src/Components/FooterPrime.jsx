import React from "react";
import logoUptc from "../Assets/LogoUptc.svg";

export const FooterPrime = () => {
  return (
    <div className="footer-div">
      <div className="logo-info">
        <img alt="logo" src={logoUptc} height="80" className="mr-2"></img>
        <p>
          El proyecto desarrollado para la materia de inteligencia computacional
          se basa en la implementación de una inteligencia artificial
          generativa. Esta IA tiene como objetivo la creación de espacios de
          dormitorios realistas, considerando cuidadosamente la armonía de color
          en su diseño
        </p>
      </div>

      <div className="more-info">
        {/** Aquí puedes agregar más información del footer */}
        <h3>Más Información</h3>
        <ul>
          <li>
            <a href="https://www.uptc.edu.co/sitio/portal/">Enlace 1</a>
          </li>
          <li>
            <a href="https://www.uptc.edu.co/sitio/portal/">Enlace 2</a>
          </li>
          <li>
            <a href="https://www.uptc.edu.co/sitio/portal/">Enlace 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
