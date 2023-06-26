import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="kalami-hero-wraper">
      {/* first part */}
      <div className="kalami-hero-first">
        <h1>
          Upload <span>files</span> to your Chatgpt conversation{" "}
          <span>1- click</span> data transfer No APIs
        </h1>
        <p>
          Boost AI conversations with Kalami: fewer misunderstandings, more
          tokens, your context added.
        </p>
        <div className="kalami-btn-group">
          <Link href="https://drive.google.com/drive/folders/1iIBZwRG2Pjba5gkhmgf5VrzrOnVGkhDL?usp=sharing">
            <button className="btn btn-primary">
              Install Chrome Extension
            </button>{" "}
          </Link>
          <Link href="/how-it-works">
            <button className="btn btn-outline">How it works?</button>
          </Link>
        </div>
      </div>
      {/* second part */}
      {/* <div className="kalami-hero-second"> */}
      {/* video */}
      {/* <div className="kalami-hero-video">
          <iframe
            src="https://player.vimeo.com/video/761979074?h=a045efbd3d&color=fec204&title=0&byline=0&portrait=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div> */}
      {/* layers */}
      {/* <div className="kalami-hero-layers">
          <img src="/video-layer.png" alt="video-layers" />
        </div> */}
      {/* </div> */}

      {/* layers */}
      <img className="hero-layers first" src="/layer7.png" alt="" />
      <img className="hero-layers second" src="/layer3.png" alt="" />
      <img
        className="hero-layers third hidden md:block"
        src="/layer4.png"
        alt=""
      />
      <img className="hero-layers fourth" src="/layer1.png" alt="" />
    </div>
  );
};

export default Hero;
