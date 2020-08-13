import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../logo.svg'

const Header = ()=>{
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
         SHOP
        </Link>
        <Link  className="option">
          CONTACT
       </Link>
      </div>
    </div>
  )
}
export default Header;