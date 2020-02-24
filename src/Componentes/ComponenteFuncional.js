import React from "react";
import "../App.css";

export function Comentario(props) {
  return (
    <div className="card cardWidth">
      <label>
        <Foto nombre_imagen="Mi fotico" />
      </label>
      <div class="card-body">
        <label className="labelTexto">
          Nombre del usuario: {props.nombre}
        </label>
        <button className="btn btn-primary"> Enviar </button>
      </div>
    </div>
  );
}

export const Foto = props => {
  return (
    <div>
      <div>
        <img alt=""></img>
      </div>
      <span>{props.nombre_imagen}</span>
    </div>
  );
};
