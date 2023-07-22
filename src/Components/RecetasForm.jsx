const RecetasForm = ({onSubmit}) => {
  const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value;
    const ingredients = form[1].value;
    const time = form[2].value;
    const receta = { name, ingredients, time };
    onSubmit(receta);
    form.reset();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Ingredientes" />
      <input type="number" placeholder="Tiempo de preparación" />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default RecetasForm;
