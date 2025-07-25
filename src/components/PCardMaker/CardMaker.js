import React from "react";
import PizzaCard from "../PizaaCard/PizzaCard";
import PizzaList from "./PizzaList";

import "./CardMaker.css";

const CardMaker = () => {
  const pizzaCardComponents = PizzaList.map((pizza) => {
    const { id, name, ingredients, availableQuantity, image } = pizza;
    return (
      <PizzaCard
        key={id}
        pImg={image}
        pName={name}
        pIng={ingredients}
        pAva={availableQuantity}
      />
    );
  });

  return <div className="cards">{pizzaCardComponents}</div>;
};

export default CardMaker;
