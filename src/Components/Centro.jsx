import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { ColorPicker } from "primereact/colorpicker";
import { API_URL, hexToRgb } from "../utils/constants";
import StepsIA from "./StepsIA";
import MessageReact from "./MessageReact";

export const Centro = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [promptvalidate, setPromptvalidate] = useState(false);
  const [roomDesign, setRoomDesign] = useState("");
  const [dataColors, setDataColors] = useState({});
  const [generatingImage, setGeneratingImage] = useState(false);
  //alertas
  const [showMessage, setShowMessage] = useState(false);
  const [wordNoFound, setWordsNoFound] = useState({});

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const validateFields = () => {
    if (text === "") {
      setWordsNoFound("Ingrese algun promp");
      setShowMessage(true);
      return false;
    }
    return true;
  };

  const callError = () => {
    setWordsNoFound("Seleccione algun color");
    setShowMessage(true);
  };

  /**Metodos de paleta de Colores */
  const generatePalete = async () => {
    const response = await fetch(`${API_URL}/colormind`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color: color }),
    });
    const data = await response.json();
    setDataColors(data.data);
    setPromptvalidate(true);
  };

  const convertColorToRGBArray = (color) => {
    const colorrgb = hexToRgb(color);
    console.log(`color rgb = ${colorrgb}`);
    setColor(colorrgb);
    return colorrgb;
  };
  /**Metodos de paleta de Botones */
  const handleClick = async (e) => {
    setLoading(true);
    setShowMessage(false);
    if (validateFields()) {
      try {
        const response = await fetch(`${API_URL}/nlp/validate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: text }),
        });
        const data = await response.json();
        if (data.state) {
          color == null ? callError() : generatePalete();
        } else {
          setWordsNoFound(`cambie estas palabras: ${data.data}`);
          setShowMessage(true);
        }
      } catch (error) {
        setWordsNoFound('Failed to fetch')
        setShowMessage(true)
      }
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    setGeneratingImage(true);
    try {
      const response = await fetch(`${API_URL}/prodia`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompUser: `genera una habitacion realista con ${text} y que tenga unicamente las siguientes tonalidades RGB:  [ ${dataColors.color1}, ${dataColors.color2}, ${dataColors.color3}, ${dataColors.color4}, ${dataColors.color5} ] minimo usa 3 tonalidades proporcionadas anteriormente.`,
        }),
      });
      const data = await response.json();
      setRoomDesign(data.data.imageUrl);
      //setPromptvalidate(false);
    } catch (error) {
      console.log(error);
    } finally {
      setGeneratingImage(false);
    }
  };

  return (
    <div className="contentLau">
      <StepsIA />
      {showMessage && <MessageReact words={wordNoFound} />}{" "}
      {/* Renderizar el mensaje si showMessage es true */}
      <div className="editor-container">
        <Editor
          value={text}
          onTextChange={(e) => setText(e.textValue)}
          style={{ height: "180px" }}
        />
      </div>
      <div>
        <div className="divColor">
          <div>
            <ColorPicker
              value={color}
              onChange={(e) => setColor(convertColorToRGBArray(e.value))}
              inline
            />
          </div>
          <div className="colorpicked">
            <div
              className="colorBox"
              style={{ backgroundColor: `${dataColors.color1}` }}
            ></div>
            <div
              className="colorBox"
              style={{ backgroundColor: `${dataColors.color2}` }}
            ></div>
            <div
              className="colorBox"
              style={{ backgroundColor: `${dataColors.color3}` }}
            ></div>
            <div
              className="colorBox"
              style={{ backgroundColor: `${dataColors.color4}` }}
            ></div>
            <div
              className="colorBox"
              style={{ backgroundColor: `${dataColors.color5}` }}
            ></div>
          </div>
        </div>

        <div className="buttonContent">
          <Button
            disabled={loading}
            onClick={handleClick}
            label="Validar promp y generar paleta"
            severity="info"
          />

          <Button
            label={generatingImage ? "Generando diseño " : "Generar Imagen"}
            severity="success"
            disabled={!promptvalidate || generatingImage}
            onClick={handleSubmit}
            style={{ color: "white" }}
          />
        </div>
        {/**Imagen*/}
        <div className="room_img">
          {roomDesign !== "" && (
            <img
              className="room_img__image"
              src={roomDesign}
              alt="room design"
            />
          )}
        </div>
      </div>
    </div>
  );
};
