import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const style = {
    color: 'blue',
  };
  return (
    <nav className="navBar">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <ul style={style}>
        <Link to="/" className="link home">
          <li>Home</li>
        </Link>
        <Link to="/calculator" className="link calc">
          <li>Calculator</li>
        </Link>
        <Link to="/quote" className="link quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
