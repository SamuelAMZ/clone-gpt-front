import React from "react";
import Link from "next/link";

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
              <Link href="#" target="_blank">
                <FiTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <RxDiscordLogo />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Title</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Title</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Title</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link href="#">Lorem Ipsum</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
