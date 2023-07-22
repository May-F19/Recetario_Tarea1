import {useState, useEffect} from "react"; 
import RecetasForm from './RecetasForm';
import RecetasItem from './RecetasItem';

const RecetasList = () => { 
  const [recetasCount, setrecetasCount] = useState(0);
  const [recetas,setRecetas] = useState([

    {
      name:"Chiles Rellenos",
      ingredients: "Chiles, queso, carne molida, aceite",
      time: 95
    },
    {
      name:"Chilaquiles",
      ingredients: "Aceite, tortillas, chile, ajo, tomate",
      time: 35
    },
    {
      name:"Tarta de Manzana",
      ingredients: "Harina, Manzana, Mantequilla, Azúcar, Huevo, Leche",
      time: 120
    },

  ]);

  const addReceta = (receta) => {
    setRecetas([...recetas,receta]);
  };

  useEffect(()=>{

    //alert("Renderizando RecetasList");
    setrecetasCount(recetas.length);

  },[recetas])

  return (
    <>
      <h1> Mi Recetario ({setrecetasCount} Recetas) </h1>
      <RecetasForm onSubmit = {addReceta} />
      <ul className="flex gap-4 py-4">
        {recetas.map((receta) => (
          <li style={{ backgroundColor: "white" }}>
            <RecetasItem receta={receta} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecetasList;