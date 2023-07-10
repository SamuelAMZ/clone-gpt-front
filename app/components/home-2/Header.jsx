"use client";

import React from "react";
import Link from "next/link";

import StartedFreeButton from "./home-2-elems/StartedFreeButton";

const Header = () => {
  const toggleHeader = () => {
    const header = document.querySelector('.home-2 .home2-kalami-header-wrapper');
    header.classList.toggle('header-wrapper-responsive');
    header.classList.toggle('margin-bottom-290');
    const headerMenu = document.querySelector('.home-2 .home2-kalami-header-wrapper .logo-menu-container .kalami-menu-wrapper ul');
    headerMenu.classList.toggle('menu-wrapper-responsive');
    const authActions = document.querySelector('.home-2 .home2-kalami-header-wrapper .kalami-auth-actions');
    authActions.classList.toggle('kalami-auth-actions-responsive');
  };

  return (
    <div className="home2-kalami-header-wrapper">
      {/* logo */}
      <Link href="/">
        <img
          className="kalami-logo"
          src={"/home-2/kalami-logo.png"}
          alt="kalami-logo"
        />
      </Link>
      <div className="logo-menu-container">
        {/* menu */}
        <div className="kalami-menu-wrapper">
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
      <div className="kalami-auth-actions">
        {/* <button className="btn btn-ghost">
              Log out
            </button> */}
        <Link href="/auth">
          <button className="btn btn-ghost">Log in</button>
        </Link>
        <StartedFreeButton />
      </div>
      <div className="menu-bar" onClick={toggleHeader}>
        <img src="/home-2/menu-bar-icon.png" alt="menu-bar"/>
      </div>
    </div>
  );
};

export default Header;
