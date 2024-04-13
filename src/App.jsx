import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./Components/Form";
import ListaReceitas from "./Components/ListaReceitas";

function App() {
  const [inputText, setInputText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");

  const APP_ID = "d62841c6";
  const APP_KEY = "acb5ffa2244d107ac47f173c4690286c";

  useEffect(() => {
    pegarReceitas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, mealType]);

  async function pegarReceitas() {
    const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const url = mealType ? `${baseUrl}&mealType=${mealType}` : baseUrl;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits); // Adicione um log aqui para inspecionar a estrutura dos dados
    if (data.hits) {
      setRecipes(data.hits);
    } else {
      setRecipes([]); // Garante que o estado não seja undefined ou nulo
    }
  }

  return (
    <div className="App">
      <Form
        setQuery={setQuery}
        inputText={inputText}
        setInputText={setInputText}
        setMealType={setMealType}
      />
      {recipes.map((recipe) => (
        <ListaReceitas
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
