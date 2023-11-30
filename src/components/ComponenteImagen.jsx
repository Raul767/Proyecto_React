import React from "react";
import '../App.css';
import '../images/OIP.jpeg'

const ComponenteImagen = () => {
    return (
        <div className="imagen-container">
            <h2>Componente de Imagen</h2>
            <img src="OIP.jpeg" alt="Una imagen" />
        </div>
    );
};

export default ComponenteImagen;