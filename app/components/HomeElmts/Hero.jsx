import React from "react";

const Hero = () => {
  return (
    <div className="kalami-hero-wraper">
      {/* first part */}
      <div className="kalami-hero-first">
        <h1>
          Manage all of your <span>daily task</span> at once Today{" "}
        </h1>
        <p>
          Is online invoicing software that helps you craft invoices, send
          payment reminders, keep track. expenses.
        </p>
        <div className="kalami-btn-group">
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-outline">How it works?</button>
        </div>
      </div>
      {/* second part */}
      <div className="kalami-hero-second">
        {/* video */}
        <div className="kalami-hero-video">
          <iframe
            src="https://player.vimeo.com/video/761979074?h=a045efbd3d&color=ffff00&title=0&byline=0&portrait=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* layers */}
        <div className="kalami-hero-layers">
          <img src="video-layers.png" alt="video-layers" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
