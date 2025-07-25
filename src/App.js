import React from "react";
import CardMaker from "./components/PCardMaker/CardMaker";
import Scroll from "./components/Scroll/Scroll";

import "./App.css";

function App() {
  const now = new Date();
  const hours = now.getHours();
  return (
    <div className="App">
      <h1 className="menuHeader">REACT PIZZA MENU</h1>
      <Scroll>
        <div className="homeItems">
          <div className="ourMenu">
            <hr></hr>
            <h2>OUR MENU</h2>
            <hr></hr>
          </div>
          <div className="bio">
            <p className="menuBio">
              Whether you love a thin, crispy crust or a thick, cheesy slice,
              our pizzas are crafted with fresh ingredients, rich sauces, and
              premium toppings.
              <br />
              Every bite is made to satisfy. Choose your style, build your own,
              or try one of our signature pies.
            </p>
          </div>
          <div>
            <CardMaker />
          </div>

          {hours >= 9 && hours < 23 ? (
            <p>We are open from 9:00 to 23:00 Come visit or ordeer online.</p>
          ) : (
            "Closed"
          )}
        </div>
      </Scroll>
    </div>
  );
}

export default App;
