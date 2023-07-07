"use client";

import React from "react";

import ReviewItem from "./home-2-elems/ReviewItem";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="header">
        <h1>What client says about us</h1>
        <p>
          TrainMyAI is a self-hosted knowledge base and AI chatbot which lets
          your customers or employees get answers from your content using.
        </p>
      </div>
      <div className="items">
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
      </div>
    </div>
  );
};

export default Reviews;
