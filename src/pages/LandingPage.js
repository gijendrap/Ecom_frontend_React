import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './Navbar';

function LandingPage() {
    return (
        <div>
        <NavBar/>
          <div className="container mt-5">
          </div>
          <h3>Categories</h3>
          <ul>
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/groceries">Groceries</Link>
            </li>
            <li>
              <Link to="/apparel">Apparel</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/Jumbo">Jumbo</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>
      );
}

export default LandingPage