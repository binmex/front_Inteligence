import React, { useState } from "react";
import "./InteriorDesignComponent.css";
import { API_URL } from "../utils/constants";

const InteriorDesignComponent = () => {
  const [roomText, setRoomText] = useState("");
  const [roomColor, setRoomColor] = useState("#FFFFFF"); 
  const [roomDesign, setRoomDesign] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setRoomText(e.target.value);
  };

  const handleColorChange = (e) => {
    setRoomColor(e.target.value);
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    try{
        const response = await fetch(`${API_URL}/prodia`, {
            method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompUser:roomText }),
        });
        const data = await response.json();
        console.log(data);
        setRoomDesign(data.data.imageUrl);
    }
    catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
    
  }


  return (
    <div className="interior-design-container">
      <div
        className="room-design"
        style={{ backgroundColor: roomColor }}
      >
        {roomText && <p className="room-text">{roomText}</p>}
        
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Ingrese texto para la habitación"
          value={roomText}
          onChange={handleInputChange}
        />
        <input
          type="color"
          value={roomColor}
          onChange={handleColorChange}
        />
      </div>
      <button onClick={handleSubmit} disabled={loading} >{
        loading ? "Generando diseño..." : "Generar Diseño"
      }</button>
      
      <div className="banner">
        <span className="banner-word">Diseño de Interiores con IA</span>
        <p className="banner-text">¡Personaliza tu espacio!</p>
        {roomDesign !== "" && <img src={roomDesign} alt="room design" />}
      </div>
    </div>
  );
};

export default InteriorDesignComponent;
