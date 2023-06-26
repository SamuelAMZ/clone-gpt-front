"use client";

import React from "react";
import Link from "next/link";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../../../../utils/firebase";

// react firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";

// icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  // keep track of the user instance
  const [user, loading] = useAuthState(auth);

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      notif("successfully logged out");
    } catch (error) {
      console.error(error);
      return;
    }

    // redirect to login page after logout
    window.location.href = "/auth";
  };

  return (
    <div className="kalami-header-wraper">
      {/* logo */}
      <Link href="/">
        <img className="kalami-logo" src="/logo.png" alt="kalami-logo" />
      </Link>

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
        {user ? (
          <button onClick={handleLogout} className="btn btn-ghost">
            Log out
          </button>
        ) : (
          <>
            <Link href="/auth">
              <button className="btn btn-ghost">Log in</button>
            </Link>
            <Link href="/auth/register">
              <button className="btn btn-primary">Sign up</button>
            </Link>
          </>
        )}
      </div>

      {/* menu icon */}
      <div className="kalami-menu-icon md:hidden block">
        <HiOutlineMenuAlt3 />
      </div>
    </div>
  );
};

export default Header;
