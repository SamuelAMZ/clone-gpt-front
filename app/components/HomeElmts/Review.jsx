import React from "react";

const Review = () => {
  return (
    <div className="kalami-review-wraper">
      <div className="kalami-review">
        <h3>Loved by customers and critics all over the world</h3>
        <img src="review.png" alt="" />
        <p>
          Always wanted an online accounting software which is user friendly and
          I could use it from anywhere I want to. Zoho Books allows me to view
          my invoices, see how my inventory looks like.
        </p>
        <h5>HARESH GAUSWAMI</h5>

        {/* layers */}
        <img className="review-layers" src="layer6.png" alt="" />
        <img className="review-layers" src="layer5.png" alt="" />
      </div>
    </div>
  );
};

export default Review;
