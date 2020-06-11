import React from "react";

export default () => (
  <nav
    className="navbar is-danger"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <div className="navbar-item">
        <i className="fab fa-youtube fa-3x" aria-hidden="true"></i>
        <h1 className="title is-3 has-text-white">&nbsp;Youtube Clone</h1>
      </div>

      <div
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
  </nav>
);
