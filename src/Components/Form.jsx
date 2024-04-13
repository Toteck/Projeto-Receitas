export default function Form({
  setInputText,
  inputText,
  setQuery,
  setMealType,
}) {
  function updateInputText(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(inputText);
    setInputText("");
  }

  function handleMealTypeChange(e) {
    setMealType(e.target.value);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          onChange={updateInputText}
          value={inputText}
          type="text"
          placeholder="Digite uma receita"
        />
        <select onChange={handleMealTypeChange}>
          <option value="">Qualquer refeição</option>
          <option value="breakfast">Café da manhã</option>
          <option value="lunch">Almoço/Jantar</option>
          <option value="snack">Lanche</option>
          <option value="teatime">Hora do chá</option>
        </select>
        <button className="btn-procurar">Procurar</button>
      </form>
    </div>
  );
}
