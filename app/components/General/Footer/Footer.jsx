import React from "react";

// icons
import { FiTwitter } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="kalami-footer-wraper">
      <div className="kalami-footer-elm">
        <img src="/logo.png" alt="kalami-logo" className="kalami-logo" />
        <div className="kalami-footer-sub-elm">
          <p>
            Lorem Ipsum ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid, ur aatqueco nsectetatqueco nsectettque.
          </p>
          <ul className="kalami-socials">
            <li>
              <a href="#" target="_blank">
                <FiTwitter />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <RxDiscordLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Title</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Title</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Title</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
