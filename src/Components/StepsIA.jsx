import React, { useState } from "react";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

const StepsIA = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      label: "Ingresa Descripcion de tu habitacion, Intenta que sea lo menos hambiguo posible",
    },
    {
      label: "Seleccion un tono, es posible que no tome todos los colores generados",
    },
    {
      label: "valida los datos y dale clic en aceptar",
    },
    {
      label: "Disfruta de tu habitacion, (si no te gusta puedes seguir generando más), dando clic en el boton aceptar, hasta que encuentres un resultado que te guste.",
    },
  ];
  return (
    <>
      <div className="banner-message">
        <h2>Datos de la aplicacion</h2>
      </div>

      <div className="card">
        <Button
          outlined={activeIndex !== 0}
          rounded
          label="1"
          onClick={() => setActiveIndex(0)}
        />
        <Button
          outlined={activeIndex !== 1}
          rounded
          label="2"
          onClick={() => setActiveIndex(1)}
        />
        <Button
          outlined={activeIndex !== 2}
          rounded
          label="3"
          onClick={() => setActiveIndex(2)}
        />
        <Button
          outlined={activeIndex !== 3}
          rounded
          label="4"
          onClick={() => setActiveIndex(3)}
        />

        <Steps className="steps" model={items} activeIndex={activeIndex} />
      </div>
    </>
  );
};

export default StepsIA;
