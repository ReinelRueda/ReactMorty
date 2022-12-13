import React from "react";

const Personaje = ({ datos }) => {
  return (
    <div>
      <li key={datos.id}>{datos.name}</li>
      <img src={datos.image} />
    </div>
  );
};

export default Personaje;
