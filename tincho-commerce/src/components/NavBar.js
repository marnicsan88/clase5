import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import logo from './../resources/logo.png';
import loguito from './../resources/loguito.png';
import Searchbox from './SearchBox'
import CartIcon from './CartIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './css/styles.css';

const NavPpal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const usuario = <FontAwesomeIcon icon={faUserCircle} />
  const displayFlex = "flex";
  //<NavbarBrand href="/" className="text-white">Reactive Market</NavbarBrand>
  return (
      <Navbar color="light" light expand="md" className="nav-background flex-space-between" style={{display:displayFlex}}>
        <NavbarBrand href="/" className="text-white flexible"><img src={logo} /></NavbarBrand>
        <Searchbox/>
        <div style={{display:displayFlex}}>
          <NavLink href="/" className="text-white icon-link"><CartIcon/></NavLink>
          <NavLink href="/" className="text-white icon-link">{usuario}</NavLink>
        </div>
      </Navbar>
  );
}

export default NavPpal;