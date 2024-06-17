import React from 'react';
import Search from "../Search/Search.component"

import "./Nav.styles.css";

function Nav() {
  const components = [
    {
      id: 1,
      title: "Forms",
      link: "/forms"
    },
    {
      id: 2,
      title: "Inputs",
      link: "inputs/"
    }
  ];


  return (
    <nav className='nav-container'>
      <div className='nav-section-container'>
        <h1>MIDAS - Frontend Catalog</h1>
      </div>

      <div className="nav-section-container">
        <Search components={components}/>
      </div>
    </nav>
  );
}

export default Nav;
