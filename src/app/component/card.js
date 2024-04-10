// Card.js
'use client'
import React from "react";
import StyledCard from "./styleCard";
import { BsArrowRightCircleFill } from "react-icons/bs";


const Card = ({ cardDetails }) => {
  const isTopThree = cardDetails.id && cardDetails.id <= 3;
  let color = "";

  switch (cardDetails.id) {
    case 1:
      color = "bg-purple-600";
      break;
    case 2:
      color = "bg-blue-500";
      break;
    case 3:
      color = "bg-blue-700";
      break;
    default:
      color = "";
  }

  return (
    <StyledCard color={color} isTopThree={isTopThree}>
      <h1
        className={isTopThree ? "border-white border-2 text-lg mb-8 w-fit px-3 py-1 rounded-3xl" : "text-lg mb-8 w-fit px-3 py-1 border-blue-600 border-2 rounded-3xl text-blue-600"}
      >
        {cardDetails.category}
      </h1>
      <p className={isTopThree ? "text-3xl " : "font-semibold text-3xl"}>{cardDetails.description}</p>
      <p className={isTopThree ? "text-md pt-2 " : "text-md text-gray-500 pt-2"}>READ TIME: {cardDetails.readTime} MINUTES</p>
      <p className={isTopThree ? "pr-5 py-5 font-semibold text-lg" : "pr-5 py-5 font-bold text-lg"}>{cardDetails.text}</p>
      <p className={isTopThree ? "pt-10 flex items-center gap-2 font-md" : "pt-10 flex items-center gap-2 font-md"}>Read the article <BsArrowRightCircleFill className="size-5" /></p>
    </StyledCard>
    
  );
  
};





export default Card;
