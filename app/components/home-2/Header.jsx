"use client";

import React from "react";
import Link from "next/link";

import StartedFreeButton from "./home-2-elems/StartedFreeButton";

const Header = () => {
  
  return (
      <div className="home2-kalami-header-wraper">
        {/* logo */}
        <div className="logo-menu-container">
          <Link href="/">
            <img className="kalami-logo" src={'/home-2/kalami-logo.png'} alt="kalami-logo" />
          </Link>

          {/* menu */}
          <div className="kalami-menu-wraper hidden md:block">
            <ul>
              <li>
                <Link href="/" className="btn btn-ghost">
                  How it works
                </Link>
              </li>
              <li
                onClick={() => {
                  document
                    .querySelector("#faq")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Link href="/#faq" className="btn btn-ghost">
                  Why Kalami
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/drive/folders/1iIBZwRG2Pjba5gkhmgf5VrzrOnVGkhDL?usp=sharing"
                  className="btn btn-ghost"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/drive/folders/1iIBZwRG2Pjba5gkhmgf5VrzrOnVGkhDL?usp=sharing"
                  className="btn btn-ghost"
                >
                  Install Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* auth actions */}
        <div className="kalami-auth-actions hidden md:flex">
            {/* <button className="btn btn-ghost">
              Log out
            </button> */}
            <Link href="/auth">
              <button className="btn btn-ghost">Log in</button>
            </Link>
            <StartedFreeButton/>
        </div>

        
      </div>

  );
};

export default Header;
