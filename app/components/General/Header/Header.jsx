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
            <Link href="/" className="btn btn-ghost">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="btn btn-ghost">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="#" className="btn btn-ghost">
              Roadmap
            </Link>
          </li>
          <li>
            <Link href="#" className="btn btn-ghost">
              Join Discord
            </Link>
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
