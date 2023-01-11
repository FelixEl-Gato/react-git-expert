import { useState } from "react";
import { AddCategory, GridGif } from "./components";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={handleCategory} />

      <ol>
        {categories.map((category) => (
          <GridGif key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
