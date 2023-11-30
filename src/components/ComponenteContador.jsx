import React, { useState } from 'react';
import '../App.css';

const ComponenteContador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="contador-container">
      <h2>Componente de Contador</h2>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default ComponenteContador;
