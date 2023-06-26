"use client";

import React from "react";
import Link from "next/link";

// icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <div className="kalami-header-wraper">
      {/* logo */}
      <img className="kalami-logo" src="/logo.png" alt="kalami-logo" />

      {/* menu */}
      <div className="kalami-menu-wraper hidden md:block">
        <ul>
          <li>
            <Link href="/" className="btn btn-ghost">
              Home
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
              FAQs
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

      {/* auth actions */}
      <div className="kalami-auth-actions hidden md:flex">
        <Link href="/auth">
          <button className="btn btn-ghost">Log in</button>
        </Link>
        <Link href="/auth/register">
          <button className="btn btn-primary">Sign up</button>
        </Link>
      </div>

      {/* menu icon */}
      <div className="kalami-menu-icon md:hidden block">
        <HiOutlineMenuAlt3 />
      </div>
    </div>
  );
};

export default Header;
