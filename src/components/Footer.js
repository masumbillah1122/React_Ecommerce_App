import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/">
              <img src="./assets/images/1.png" alt="Logo" />
            </Link>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                quia reprehenderit praesentium iure placeat animi nobis quis
                voluptatum nulla suscipit. Molestiae aperiam voluptatibus porro
                eum quam repudiandae natus alias dignissimos.!
              </p>
            </div>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
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
            <h3>Follow Us</h3>
            <div className="right">
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
        <div className="row">
          <div className="col">
            <hr />
            <div className="copyRights">
              <p className="copy">&copy; 2022. All Rights Reserved. Powered by Khan Haque. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer