import React from "react";

function ListaReceitas({ title, calories, image, ingredients }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li> // Use o índice como chave
        ))}
      </ul>
      <p>{calories}</p>

      <img src={image} alt="" />
    </div>
  );
}

export default ListaReceitas;
