import React from "react";

import "./PizzaCard.css";

export default function PizzaCard({ pName, pIng, pAva, pImg }) {
  return (
    <div
      className={`ma-pa ${
        pAva > 0 ? "card-continer" : "card-continer soldout"
      }`}
    >
      <>
        <img className="pizzaImg" alt="Margherita" src={pImg}></img>
      </>
      <div className="pizzaInfo">
        <div>
          <h3 className="pizzaName ma-pa">{pName}</h3>
          <p className="pizzaIng ma-pa">{pIng}</p>
        </div>
        <div className="order-amount">
          {pAva > 0 ? (
            <p className="pizzaAm">{pAva}</p>
          ) : (
            <p className="soldoutBadge ma-pa">Sold out</p>
          )}
          <button>Order</button>
        </div>
      </div>
    </div>
  );
}
