'use client'
import React from "react";
import clsx from "clsx";

const StyledCard = ({ color, isTopThree, children }) => {
  const backgroundColor = isTopThree ? color : "white";

  return (
    <div
      className={clsx(
        "border p-8 rounded-3xl font-questrial",
        backgroundColor,
        isTopThree && "text-white"
      )}
    >
      {children}
    </div>
  );
};

export default StyledCard;
