import React from "react";
import logo from '../Assets/logoCafe.svg'

export const BannerPrime = () => {
  return (
    <div className="div-banner">
      <div className="content-banner">
        <div className="banner-message">
          <h2>
            Ahora tu puedes{" "}
            <span className="banner-word">
              Crear tu habitacion
            </span>{" "}
            Usando IA
          </h2>
        </div>

        <div className="banner-text">
          <p>
          Bienvenido a nuestro creador de diseños de habitaciones. Con nuestra potente inteligencia artificial, podrás visualizar y personalizar tus espacios de descanso de una manera completamente nueva. 
          </p>
        </div>
      </div>

      <div className="vector">
      <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};
