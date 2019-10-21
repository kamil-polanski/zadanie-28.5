import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/country.css';


const Navigation = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Państwa.js</Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item nav-link"><Link activeStyle={{color: '#FF5733'}} to="/countries">Countries</Link></li>
          <li className="nav-item nav-link"><Link activeStyle={{color: '#FF5733'}} to="/continents">Continents</Link></li>
          <li className="nav-item nav-link"><Link activeStyle={{color: '#FF5733'}} to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
);

export default Navigation;