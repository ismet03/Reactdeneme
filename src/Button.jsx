import React from 'react';
import './css/button.css'

function Button({ onCategoryChange }) {
    return (
        <div className="buttonmenu">
            <button onClick={() => onCategoryChange("ALL")}>ALL</button>
            <button onClick={() => onCategoryChange("İNŞAAT")}>İNŞAAT</button>
            <button onClick={() => onCategoryChange("TURİZM")}>TURİZM</button>
            <button onClick={() => onCategoryChange("EMLAK")}>EMLAK</button>
            <button onClick={() => onCategoryChange("QR MENÜ")}>QR MENÜ</button>
            <button onClick={() => onCategoryChange("GIDA")}>GIDA</button>
            <button onClick={() => onCategoryChange("DİĞER")}>DİĞER</button>
            <button onClick={() => onCategoryChange("SAĞLIK")}>SAĞLIK</button>
            <button onClick={() => onCategoryChange("VİLLA KİRALAMA")}>VİLLA KİRALAMA</button>
        </div>
    );
}

export default Button;
