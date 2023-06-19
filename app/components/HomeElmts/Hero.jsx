import React from "react";

const Hero = () => {
  return (
    <div className="kalami-hero-wraper">
      {/* first part */}
      <div className="kalami-hero-first">
        <h1>
          A.I With <span>More</span> Tokens, <span>Fewer</span> Hallucinations,
          Entirely You.
        </h1>
        <p>
          Boost AI conversations with Kalami: fewer misunderstandings, more
          tokens, your context added.
        </p>
        <div className="kalami-btn-group">
          <button className="btn btn-primary">Install now</button>
          <button className="btn btn-outline">How it works?</button>
        </div>
      </div>
      {/* second part */}
      <div className="kalami-hero-second">
        {/* video */}
        <div className="kalami-hero-video">
          <iframe
            src="https://player.vimeo.com/video/761979074?h=a045efbd3d&color=fec204&title=0&byline=0&portrait=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* layers */}
        <div className="kalami-hero-layers">
          <img src="/video-layer.png" alt="video-layers" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
