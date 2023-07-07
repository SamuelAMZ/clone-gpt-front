"use client";

import React from "react";

import StartedFreeButton from "./home-2-elems/StartedFreeButton";
import ExtensionDownloadButton from "./home-2-elems/ExtensionDownloadButton";
import VideoPlayer from "./home-2-elems/VideoPlayer";

const WhyKalami = () => {
  
  return (
    <div className="why-kalami">
      <div className="description">
        <h2>
          Chat with AI trained on your: GitHub repositories
        </h2>
        <h5>
          Not just GitHub - we help you understand a wide array of code files.
        </h5>
        <div className="kalami-auth-actions hidden md:flex">
          <StartedFreeButton/>
          <ExtensionDownloadButton/>
        </div>
      </div>
      <VideoPlayer/>
    </div>

  );
};

export default WhyKalami;
