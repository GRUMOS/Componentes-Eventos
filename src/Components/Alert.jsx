import React from 'react';
import './Alert.css'

const Alert = ({ message, isError}) => {
  return (
    <div className={isError ? "error" : "exito"}>
      {message}
    </div>
  );
}

export default Alert;
