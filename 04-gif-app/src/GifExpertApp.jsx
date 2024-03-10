import { useState } from "react";
import { AddCategories, GifGrids } from "./Components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["pokemon"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategories onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrids key={category} category={category} />
      ))}
    </>
  );
};
