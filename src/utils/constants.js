export const API_URL = 'https://proyect-inteligence-wine.vercel.app/';

export function hexToRgb(hex) {
        
    if (hex.length === 3) {
        hex = hex
            .split('')
            .map(function (char) {
                return char + char;
            })
            .join('');
    }

    
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    
    return [r,g,b] 
}

