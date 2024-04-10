// SubscriptionForm.js
import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="bg-white flex-row font-questrial rounded-xl m-5 px-10 justify-center items-center text-black py-10">
      <div className="flex justify-center gap-5 items-center content-center">
        <h2 className="w-full font-bold">
          First Name
          <input
            className="border-2 w-full px-3 font-normal border-gray-400 rounded-md p-2"
            placeholder="First name"
          ></input>
        </h2>
        <h2 className="w-full font-bold">
          Last Name
          <input
            className="border-2 w-full font-normal border-gray-400 rounded-md p-2"
            placeholder="Last name"
          ></input>
        </h2>
      </div>
      <h2 className="pt-10 font-bold">Email Address</h2>
      <input
        className="border-2 mb-3 w-full font-normal border-gray-400 rounded-md p-2"
        placeholder="Enter your email address"
      ></input>
      <button className="py-3 bg-blue-600 w-full my-5 rounded-3xl text-white">Submit</button>
    </div>
  );
};

export default SubscriptionForm;
