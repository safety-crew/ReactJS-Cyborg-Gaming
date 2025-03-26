import React from "react";
import "./MostPopular.css";
import { Card, SectionHeader, SectionWrapper } from "../../Components/index";
import mostPopularData from "../../Data/MostPopularData";

const MostPopular = () => {
  const cards = mostPopularData.map((card) => (
    <Card
      key={card.id}
      image={card.image}
      title={card.title}
      category={card.category}
      rate={card.rate}
      downloads={card.downloads}
    />
  ));

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className="most-popular-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
