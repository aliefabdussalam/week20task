import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"



const NavbarItem = () => {
  return (
    <div className="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="logo">
        <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true" alt=""></img>
            <h1>
            Coffe Shop
            </h1>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/product">Product</Link>
            </li> 
            <li class="nav-item">
              <Link class="nav-link" to="#">Your Cart</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" href="#">History</Link>
            </li>
          </ul>
          <div class="secondary-menu">
            <ul class="menu">
                <li><Link to="/login"><button class="login">Login</button> </Link></li>
                <li><Link to="/signup"><button class="signup">Sign up</button></Link></li>
                     
            </ul>
         </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarItem;