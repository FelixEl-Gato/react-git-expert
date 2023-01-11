import { useState } from "react";

export const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("");

  const { onNewCategory } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    if (inputValue.trim().length < 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
