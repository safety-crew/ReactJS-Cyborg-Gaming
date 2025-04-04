import React from "react";
import "./GamingLibrary.css";
import {
  GamingLibraryCard,
  SectionHeader,
  SectionWrapper,
} from "../../Components/index";
import GamingLibraryData from "../../Data/GamingLibraryData";

const GamingLibrary = () => {
  const cards = GamingLibraryData.map((card) => (
    <GamingLibraryCard
      key={card.id}
      image={card.image}
      title={card.title}
      category={card.category}
      date_added={card.date_added}
      hours_played={card.hours_played}
      download={card.download}
    />
  ));

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default GamingLibrary;
