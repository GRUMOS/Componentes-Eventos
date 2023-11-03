import React, { useState } from 'react';
import Alert from './Alert';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === '' || email === '' || contrasena === '' || confirmarContrasena === '') {
      setError(true);
      setErrorMessage("Todos los campos son obligatorios")
      return;
    }
    if (contrasena !== confirmarContrasena){
      setError(true);
      setErrorMessage("Las contraseñas deben ser iguales")
      return;
    }
    if (!email.includes("@") || !email.includes(".cl") && !email.includes(".com")) {
      setError(true);
      setErrorMessage("Email no tiene formato correcto")
      return;
    }
    setError(false);
    setErrorMessage("Registro satisfactorio");
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmarContrasena('');
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
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
        {errorMessage && <Alert message= {errorMessage} isError={error}></Alert>}
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
}

export default Formulario;
