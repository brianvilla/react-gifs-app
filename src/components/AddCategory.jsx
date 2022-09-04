import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // desestructuramos el 'event' ya que solo nos interesa su propiedad "target"
  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gifs..."
        value={inputValue}
        // onChange={(event) => onChange(event)} al enviarse siempre la misma propiedad que se recibe se puede simplificar:
        onChange={onChange}
      />
    </form>
  );
};
