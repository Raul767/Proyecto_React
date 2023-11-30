import React, { useState } from 'react';
import '../App.css';

const ComponenteToggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <h2>Componente de Alternar Visibilidad</h2>
      <button className='visibilidad' onClick={toggleVisibility}>Toggle Visibilidad</button>
      {isVisible && <p>Este contenido se muestra/oculta</p>}
    </div>
  );
};

export default ComponenteToggle;
