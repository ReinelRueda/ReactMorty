import React from "react";

const Personaje = ({ datos }) => {
  return (
    <div>
      <li key={datos.id}><h3> {datos.name}</h3></li>
      <img src={datos.image} />
    </div>
  );
};

export default Personaje;
