import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="kalami-header-wraper">
      {/* logo */}
      <img className="kalami-logo" src="/logo.png" alt="kalami-logo" />

      {/* menu */}
      <div className="kalami-menu-wraper">
        <ul>
          <li>
            <a href="/" className="btn btn-ghost">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-ghost">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-ghost">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-ghost">
              Join Discord
            </a>
          </li>
        </ul>
      </div>

      {/* auth actions */}
      <div className="kalami-auth-actions">
        <Link href="auth">
          <button className="btn btn-ghost">Log in</button>
        </Link>
        <Link href="auth/register">
          <button className="btn btn-primary">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
