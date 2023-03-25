import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5">Cuentanos, ¿En que te podemos ayudar?</h2>
      <div className="mb-3 text-center mt-3">
        <label for="exampleFormControlInput1" className="form-label">
          Correo:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="correo@ejemplo.com"
        />
      </div>
      <div className="mb-3 text-center mt-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Descripción:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="button" className="btn btn-info text-white mt-3">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
