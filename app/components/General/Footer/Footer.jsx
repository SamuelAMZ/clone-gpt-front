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
            Boost AI conversations with Kalami: fewer misunderstandings, more
            tokens, your context added.
          </p>
          <ul className="kalami-socials">
            <li>
              <Link href="/" target="_blank">
                <FiTwitter />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank">
                <RxDiscordLogo />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Quick Links</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Faqs</Link>
            </li>
            <li>
              <Link href="/">Instructions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Account</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <Link href="/">Log In</Link>
            </li>
            <li>
              <Link href="/">Sign Up</Link>
            </li>
            <li>
              <Link href="/">Forgot Password</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="kalami-footer-elm">
        <h3>Ressources</h3>
        <div className="kalami-footer-sub-elm">
          <ul>
            <li>
              <Link href="/">Download Chrome Extension</Link>
            </li>
            <li>
              <Link href="/">Feedback</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
