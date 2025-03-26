import React from "react";
import "./MostPopular.css";
import { Card } from "../../Components/index";
import popular_01 from "../../assets/images/popular-01.jpg";
import popular_02 from "../../assets/images/popular-02.jpg";
import popular_03 from "../../assets/images/popular-03.jpg";
import popular_04 from "../../assets/images/popular-04.jpg";

const MostPopular = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-header">
          <h4>Most Popular</h4>
        </div>
        <div className="most-popular-items">
          <Card
            image={popular_01}
            title="Fortnite"
            category="Sandbox"
            rate="3.8"
            downloads="2.3M"
          />
          <Card
            image={popular_02}
            title="PUBG"
            category="Stream-X"
            rate="4.8"
            downloads="1.1M"
          />
          <Card
            image={popular_03}
            title="DOTA 2"
            category="Legendary"
            rate="2.7"
            downloads="5.3M"
          />
          <Card
            image={popular_04}
            title="CS:GO"
            category="Battle S"
            rate="3.9"
            downloads="6.1M"
          />
          <Card
            image={popular_01}
            title="CS:GO"
            category="Battle S"
            rate="3.9"
            downloads="6.1M"
          />
          <Card
            image={popular_02}
            title="CS:GO"
            category="Battle S"
            rate="3.9"
            downloads="6.1M"
          />
          <Card
            image={popular_03}
            title="CS:GO"
            category="Battle S"
            rate="3.9"
            downloads="6.1M"
          />
          <Card
            image={popular_04}
            title="CS:GO"
            category="Battle S"
            rate="3.9"
            downloads="6.1M"
          />
        </div>
      </div>
    </>
  );
};

export default MostPopular;
