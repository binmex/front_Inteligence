import React, { useEffect, useState } from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button'
import { Editor } from "primereact/editor";

import { ColorPicker } from 'primereact/colorpicker';
import { API_URL, hexToRgb } from '../utils/constants';


export const Centro = () => {
    const [text, setText] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [color, setColor] = useState(null);
    const [loading, setLoading] = useState(false)
    const [promptvalidate, setPromptvalidate] = useState(false)
    // const [colorsPickedColormind, setColorsPickedColormind] = useState({
    //     color1: { r: 0, g: 0, b: 0 },
    //     color2: { r: 0, g: 0, b: 0 },
    //     color3: { r: 0, g: 0, b: 0 },
    //     color4: { r: 0, g: 0, b: 0 },
    //     color5: { r: 0, g: 0, b: 0 }
    // })
    const [roomDesign, setRoomDesign] = useState("");
    const [dataColors, setDataColors] = useState({})

    const items = [
        {
            label: 'Ingresa Descripcion de tu habitacion'
        },
        {
            label: 'Elige tono de tu cuarto'
        },
        {
            label: 'Dale aceptar '
        },
        {
            label: 'Disfruta de tu habitacion'
        }
    ];

    const generatePalete = async() => {
        const response = await fetch(`${API_URL}/colormind`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ color: color })
        })
        const data = await response.json()
        setDataColors(data.data)
        console.log(`data colors: ${dataColors.color1}`)

    }


    const handleClick = async (e) => {
        setLoading(true)
        console.log(`the color is: ${color}`)

        try {
            const response = await fetch(`${API_URL}/nlp/validate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: text }),
            });
            const data = await response.json();
            generatePalete();

            console.log(data);
            
            if(data.state){
                //activar boton de submit
                setPromptvalidate(true)
            }else{
                //mostrar una alerta personalizada
                alert(`promp no valido, cambie las siguientes palabras:  ${data.data}`)
            }

            //data.sentiment.vote === "positive" ? setPromptvalidate(true) : alert(`prompt no valido: ${data.sentiment.vote} prompt: ${text}`)



        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    const convertColorToRGBArray = (color) => {
        const colorrgb = hexToRgb(color)
        console.log(`color rgb = ${colorrgb}`)
        setColor(colorrgb)
        return colorrgb
    }
    const handleSubmit = async (e) => {
        try{
            const response = await fetch(`${API_URL}/prodia`, {
                method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ prompUser:`genera una habitacion realista con ${text} y que tenga unicamente las siguientes tonalidades RGB:  [ ${dataColors.color1}, ${dataColors.color2}, ${dataColors.color3}, ${dataColors.color4}, ${dataColors.color5} ] minimo usa 3 tonalidades proporcionadas anteriormente.` }),
            });
            const data = await response.json();
            console.log(data);
            console.log(dataColors.color1)
            setRoomDesign(data.data.imageUrl);
        }
        catch (error) {
            console.log(error);
        }finally{
            
        }
    }

    return (
        <div className="contentLau">

            <div className="banner-message">
                <h2>Datos de la aplicacion</h2>
            </div>


            <div className="card">

                <Button outlined={activeIndex !== 0} rounded label="1" onClick={() => setActiveIndex(0)} />
                <Button outlined={activeIndex !== 1} rounded label="2" onClick={() => setActiveIndex(1)} />
                <Button outlined={activeIndex !== 2} rounded label="3" onClick={() => setActiveIndex(2)} />
                <Button outlined={activeIndex !== 3} rounded label="4" onClick={() => setActiveIndex(3)} />


                <Steps className='steps' model={items} activeIndex={activeIndex} />


            </div>


            <div className="editor-container">
                <Editor value={text} onTextChange={(e) => setText(e.textValue)} style={{ height: '180px' }} />
            </div>

            <div>
                <div className='divColor'>
                    <div>
                        <ColorPicker value={color} onChange={(e) => setColor(convertColorToRGBArray(e.value))} inline />

                    </div>
                    <div className='colorpicked'>
                        <div className='colorBox' style={{ backgroundColor: `${dataColors.color1}` }}></div>
                        <div className='colorBox' style={{ backgroundColor: `${dataColors.color2}` }}></div>
                        <div className='colorBox' style={{ backgroundColor: `${dataColors.color3}` }}></div>
                        <div className='colorBox' style={{ backgroundColor: `${dataColors.color4}` }}></div>
                        <div className='colorBox' style={{ backgroundColor: `${dataColors.color5}` }}></div>
                        
                    </div>
                </div>


                <div className='buttonContent'>
                    <Button disabled={loading} onClick={handleClick} label="Validar " />

                    <Button label="Aceptar" severity="success" disabled={!promptvalidate} onClick={handleSubmit} />
                </div>
                <div className='room_img'>
                {roomDesign !== "" && <img src={roomDesign} alt="room design" />}
                </div>


            </div>








        </div>

    )
}