import { useState, useEffect } from "react";
import Personaje from "./Personaje";

function ConexionApi() {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetchData();
    console.log(pagina);
  }, [pagina]);

  async function fetchData() {
    const respuesta = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pagina}`
    );
    const data = await respuesta.json();
    setPersonajes(data.results);
  }
  const paginaAnterior = ()=>{
    if(pagina<=1){
      setPagina(pagina = 1)
    }else{
      setPagina(pagina - 1)
    }
  }
 

  console.log(personajes);
  return (
    <div className="alert alert-primary" role="alert">
      <h1> Pagina {pagina}</h1>
      <button  onClick={() => paginaAnterior()}>Anterior</button>

      <button onClick={() => setPagina(pagina + 1)}>Siguiente</button>

      <ul className="parent">
        {personajes.map((item) => {
          return <Personaje key={item.id} datos={item} />;
        })}
      </ul>
    </div>
  );
}

export default ConexionApi;
