import React, { useState } from 'react';
import './SecondaryNavbar.css';

const SecondaryNavbar = ({navItems,changeSelectedNavHandler}) => {
    const [selectedNavItem, setSelectedNavItem] = useState(null);
    // const [navItem , setNavItem]
    
    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
        changeSelectedNavHandler(navItem)
    };

  return (
    <nav className="secondary-navbar">
      <ul>
      {navItems.map((navItem) => (
        <li
            className={selectedNavItem === `${navItem.name}` ? 'selected' : ''}
            onClick={() => handleNavItemClick(navItem.name)}
        >
            <a href={navItem.href}>{navItem.name}</a>
        </li>
      ))}

        {/* <li
          className={selectedNavItem === 'Nav 1' ? 'selected' : ''}
          onClick={() => handleNavItemClick('Nav 1')}
        >
          <a href="#">Nav 1</a>
        </li>
        <li
          className={selectedNavItem === 'Nav 2' ? 'selected' : ''}
          onClick={() => handleNavItemClick('Nav 2')}
        >
          <a href="#">Nav 2</a>
        </li>
        <li
          className={selectedNavItem === 'Nav 3' ? 'selected' : ''}
          onClick={() => handleNavItemClick('Nav 3')}
        >
          <a href="#">Nav 3</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default SecondaryNavbar;