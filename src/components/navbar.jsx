import React, { Component } from "react";
// Stateless functional Component
const Navbar = (props) => {
  return (
    <nav className="Navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {props.totalCounter}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
