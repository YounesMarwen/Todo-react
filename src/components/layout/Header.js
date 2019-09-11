import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <div className="header-brand">
        <Link to="/">
          <h1>Todo List</h1>
        </Link>
      </div>
      <div className="header-links">
        <Link className="header-links-item" to="/">
          Home
        </Link>

        <Link className="header-links-item" to="/about">
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
