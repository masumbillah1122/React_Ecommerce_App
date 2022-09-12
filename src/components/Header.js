import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLock, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {

  const state = useSelector((state) => state.HandleCart);
  console.log(state.length);

  return (
    <div className="header">
      <div className="container">
        <div className="top row">
          <div className="col">
            <div className="topDiv">
              <FontAwesomeIcon icon={faPhone} />
              <span>+304092051</span>
            </div>
            <div className="topDiv">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>khan@gamil.com</span>
            </div>
          </div>
          <div className="col">
            <div className="topDiv">
              <Link to="/">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
          </div>
        </div>
        <div className="middle row">
          <div className="col">
            <Link to="/">
              <img src="./assets/images/Black.jpg" alt="Logo" />
            </Link>
          </div>
          <div className="col">
            <div className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="buttons">
              <Link to="/login">
                <FontAwesomeIcon icon={faLock} /> Login
              </Link>
              <Link to="/register">
                <FontAwesomeIcon icon={faUser} /> Register
              </Link>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart({state.length})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header