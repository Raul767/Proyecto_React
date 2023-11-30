import React from 'react';
import ComponenteTexto from './components/ComponenteTexto';
import ComponenteImagen from './components/ComponenteImagen';
import ComponenteFormulario from './components/ComponenteFormulario';
import ComponenteLista from './components/ComponenteLista';
import ComponenteCard from './components/ComponenteCard';
import ComponenteToggle from './components/ComponenteToggle';
import ComponenteContador from './components/ComponenteContador';

const App = () => {
  return (
    <div>
      <h1>Mi Aplicación React</h1>
      <ComponenteTexto />
      <ComponenteImagen />
      <ComponenteFormulario />
      <ComponenteLista />
      <ComponenteCard />
      <ComponenteToggle />
      <ComponenteContador />
    </div>
  );
};

export default App;
