import React from "react";
import amazon from "../image/Amazon_logo.svg.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav" id="header">
        <div className="container">
          <div className="nav-in">
            <div className="image">
              <img src={amazon} alt="amazon" />
            </div>

            <div className="list">

                
              <div className="bar">
                <i class="fa-solid fa-bars"></i>
              </div>

              <div className="menu">
                <ul>
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <a href="#heading">
                    <li>Category</li>
                  </a>
                  <a href="#buttons">
                    <li>Products</li>
                  </a>
                  <a href="#About">
                    <li>About</li>
                  </a>
                  <a href="#contact">
                    <li>Contact</li>
                  </a>
                  <a href="/cart">
                    <li>Cart</li>
                  </a>
                  <a href="/">
                    <li>Log out</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      


    </>
    
  );
}
export { Nav };
