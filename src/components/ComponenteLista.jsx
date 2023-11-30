import React from 'react';
import '../App.css';

const ComponenteLista = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="lista-container">
      <h2>Componente de Lista</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponenteLista;
