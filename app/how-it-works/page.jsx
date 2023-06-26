import React from "react";
import Link from "next/link";

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
            Get started by installing our Chrome extension via this drive link:
            <Link href="https://drive.google.com/drive/folders/1iIBZwRG2Pjba5gkhmgf5VrzrOnVGkhDL?usp=sharing">
              {" "}
              Here
            </Link>
          </p>
        </div>

        {/* steps */}
        <div className="kalami-how-steps">
          <ul className="steps steps-vertical">
            <li className="step step-primary">
              Installing our Chrome extension
            </li>
            <Link href="https://chat.openai.com/" className="step">
              Open up a ChatGPT window on chat.openai.com
            </Link>
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
