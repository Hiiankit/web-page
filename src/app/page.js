'use client'
import Header from "./component/header";
import React, { useState } from "react";
import Main from "./component/main";
import { PiCaretCircleLeftLight } from "react-icons/pi";
import { PiCaretCircleDoubleLeftLight } from "react-icons/pi";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { PiCaretCircleDoubleRightLight } from "react-icons/pi";
import SubscribeSection from "./component/SubscribeSection";
import SubscriptionForm from "./component/SubscriptionForm";
import Footer from "./component/footer";
import { cardData } from "./component/cardData";
import Card from "./component/card";


export default function Home() {
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstCard = (currentPage - 1) * cardsPerPage;
  const indexOfLastCard = indexOfFirstCard + cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main className="flex-grow" />
      <h1 className="my-4 font-questrial mx-20 font-semibold text-xl">
        Most popular
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mx-6 md:mx-20">
        {currentCards.map((cardDetails) => (
          <Card key={cardDetails.id} cardDetails={cardDetails} />
        ))}
      </div>
      <div className="flex p-10 items-center gap-1 justify-center">
        {currentPage > 1 && <PiCaretCircleDoubleLeftLight className="size-8" onClick={() => paginate(1)} />}
        {currentPage > 1 && <PiCaretCircleLeftLight className="size-8" onClick={() => paginate(currentPage - 1)} />}
        <span className="border-2 flex border-black rounded-full justify-center items-center content-center w-6">
          {currentPage}
        </span>
        {currentPage < Math.ceil(cardData.length / cardsPerPage) && <PiCaretCircleRightLight className="size-8" onClick={() => paginate(currentPage + 1)} />}
        {currentPage < Math.ceil(cardData.length / cardsPerPage) && <PiCaretCircleDoubleRightLight className="size-8" onClick={() => paginate(Math.ceil(cardData.length / cardsPerPage))} />}
      </div>
      <div className="bg-blue-950 font-questrial flex flex-col md:flex-row mx-6 md:mx-16 text-white p-5">
        <SubscribeSection />
        <SubscriptionForm />
      </div>

      <Footer />
    </div>
  );
}
