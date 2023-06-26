import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="kalami-call-to-action-wraper">
      <div className="kalami-call-to-action">
        <h3>Install Extension Now</h3>
        <div className="kalami-call-to-action-btn">
          <Link href="https://drive.google.com/drive/folders/1iIBZwRG2Pjba5gkhmgf5VrzrOnVGkhDL?usp=sharing">
            <button className="btn btn-primary">
              Install Chrome Extension
            </button>{" "}
          </Link>
          <button className="btn btn-primary">Join Discord (soon) </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
