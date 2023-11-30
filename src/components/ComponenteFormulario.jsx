import React, {useState} from "react";
import '../App.css';

const ComponenteFormulario = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formulario);
    };

    return (
        <div className="formulario-container">
            <h2>Componente de Formulario</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formulario.email}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    value={formulario.password}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default ComponenteFormulario;