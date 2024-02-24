import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button'
import { Editor } from "primereact/editor";

import { ColorPicker } from 'primereact/colorpicker';


export const Centro = () => {
    const [text, setText] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [color, setColor] = useState(null);
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
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '180px' }} />
            </div>

            <div>
                <div className='divColor'>
                    <div>
                    <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
                    </div>
                    <div className='colorpicked'>
                        <ColorPicker disabled />
                        <ColorPicker disabled />
                        <ColorPicker disabled />
                        <ColorPicker disabled />
                        <ColorPicker disabled />
                    </div>
                </div>


                <div className='buttonContent'>
                    <Button label="Validar " />

                    <Button label="Aceptar" severity="success" disabled />
                </div>


            </div>








        </div>

    )
}