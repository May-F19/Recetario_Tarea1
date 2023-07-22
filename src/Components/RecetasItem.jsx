const RecetasItem = ({ receta }) => {
  const { name, ingredients, time } = receta
  return (
    <div className="p-4 bg-slate-200 rounded-xl w-[150px]">
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>{time} min</p>
    </div>
  );
}

export default RecetasItem;