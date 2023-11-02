import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === '' || email === '' || contrasena === '' || confirmarContrasena === '') {
      setError(true);
      return;
    }
    setError(false);
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmarContrasena('');
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p>Todos los campos son obligatorios</p>}
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="contrasena"
            className="form-control"
            placeholder="Contraseña"
            onChange={(e) => setContrasena(e.target.value)}
            value={contrasena}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmarContrasena"
            className="form-control"
            placeholder="Confirmar Contraseña"
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            value={confirmarContrasena}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
}

export default Formulario;
