import React, { useState } from 'react'; 
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button'
import { Editor } from "primereact/editor";

import { ColorPicker } from 'primereact/colorpicker';
        
        
export const Centro= () => {
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
    return(
        <div className="div-bannerCentro">
             
            <div className="content-banner">
            
                <div className="banner-message">
                <h2>Datos de la aplicacion</h2>
                </div>
        
        
                <div className="card">
                    
                        <Button outlined={activeIndex !== 0} rounded label="1" onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" />
                        <Button outlined={activeIndex !== 1} rounded label="2" onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" />
                        <Button outlined={activeIndex !== 2} rounded label="3" onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" />
                        <Button outlined={activeIndex !== 2} rounded label="4" onClick={() => setActiveIndex(3)} className="w-2rem h-2rem p-0" />
                    
                    <Steps model={items} activeIndex={activeIndex} />

                    
                </div>
                

                <div className="editor-container">
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '280px' }} />
                </div>
                <div className='colorpicked'>
                    
                <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline/> 
                <ColorPicker disabled  /> 
                <ColorPicker  disabled /> 
                <ColorPicker   disabled /> 
                <ColorPicker  disabled  /> 
                <ColorPicker   disabled /> 
                
                <Button label="Validar " raised />
           
                <Button label="Aceptar" severity="success" raised disabled />

                
                    
                </div>
                <div className="Botones">
                 
            
          
            
            
        </div>
                
                
                
                
            </div>
            
                   

                    

            
            
        </div>
            
    )
}