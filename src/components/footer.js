import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css"

const Footer = () =>{
    return(
        <div className="footer">
            <footer>
            <div class="section1 col-lg-6 ">
            <div class ="logo2">
            <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true" alt=""></img>
              <h1>Coffee Shop</h1>
             </div>
             <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
          <div class="social">
                <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/Facebook.png?raw=true" alt=""></img>
                <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/Instagram.png?raw=true" alt=""></img>
                <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/Twitter.png?raw=true" alt=""></img>
          </div>
          <p class="since">©2020CoffeeStore</p>
            </div>
            <ol class="section23 col-lg-6">
      <li><div class="section2 ">
          <ol>
              <b>Product</b>
              <li>Download</li>
              <li>Pricing</li>
              <li>Location</li>
              <li>Countries</li>
              <li>Blog</li>
          </ol>
      </div></li>
      <li><div class="section3">
          <ol>
              <b>Engage</b>
              <li>Coffe Shop ?</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
          </ol>
      </div></li>
    </ol>               
    </footer>
        </div>
    )
}
export default Footer