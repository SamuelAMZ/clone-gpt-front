import React from "react";

// components
import Header from "../components/General/Header/Header";

const page = () => {
  return (
    <>
      <Header />

      <div className="kalami-how-works">
        <div className="thankyou">
          {/* thank you */}
          <img src="/thank.png" alt="" />
          <h3>Thank you!</h3>
          <p>
            Thank you for installing our Kalami extension, here are some simple
            to follow to get it work
          </p>
        </div>

        {/* steps */}
        <div className="kalami-how-steps">
          <ul className="steps steps-vertical">
            <li className="step step-primary">
              Installing our Chrome extension
            </li>
            <li className="step">
              Open up a ChatGPT window on (website link).
            </li>
            <li className="step">
              Click on the new icon appearing in the middle-right of your
              screen.
            </li>
            <li className="step">Upload any file type we support.</li>
            <li className="step">
              Click 'Kalami' on the bottom right, and begin asking the AI about
              your data.
            </li>
            <li className="step">Upload any file type we support.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
