import React from "react";
import "./Cards.css";
import { CardData } from "../../Data/Data";

const Card = () => {
  return (
    <div className="cards">
      {CardData.map((item, index) => {
        return (
          <div className="mainContainer" style={{ background: item.bGColor }}>
            <div className="numberAndPost">
              <div>
                <h1>{item.number}</h1>
              </div>
              <div>
                <p>{item.post}</p>
              </div>
            </div>
            <div className="cardIcon">{item.logo && <item.logo />}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
