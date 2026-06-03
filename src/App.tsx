import { Header } from "./components/header/Header";
import Content from "./components/maincontent/Content";
import { useState } from "react";
import type { CategoryType } from "./types";

const App = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const changeCategory = (index: number) => {
    setCategoryIndex(index);
  };

  return (
    <div>
      <Header changeCategory={changeCategory} currentCategory={categoryIndex} />
      <Content />
    </div>
  );
};

export default App;
