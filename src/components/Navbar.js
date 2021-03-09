import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/" className="navbar-brand h1">Home</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="#">
              <i className="far fa-bell fa-2x bell"></i>
            </Link>
            </li>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon ml-1"></span>
          </button>
        </div>
      </nav>
    )
  }
}