import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import logo from './../resources/logo.png';
import loguito from './../resources/loguito.png';
import Searchbox from './SearchBox'
import CartIcon from './CartIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './css/navBarStyles.css';

const NavPpal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const usuario = <FontAwesomeIcon icon={faUserCircle} />
  const displayFlex = "flex";
  //<NavbarBrand href="/" className="text-white">Reactive Market</NavbarBrand>
  return (
      <Navbar color="light" light expand="md" className="nav-background flex-space-between" style={{display:displayFlex}}>
        <NavbarBrand href="/" className="text-white flexible">
          <img src={logo} className="d-none d-sm-block"/>
          <img src={loguito} className="d-block d-sm-none"/>
        </NavbarBrand>
        <Searchbox categorias={props.categorias} />
        <div style={{display:displayFlex, justifyContent:"center"}}>
          <NavLink href="/" className="text-white icon-link px-1 px-sm-3 px-md-4"><CartIcon/></NavLink>
          <NavLink href="/" className="text-white icon-link px-1 px-sm-3 px-md-4">{usuario}</NavLink>
        </div>
        
      </Navbar>
  );
}

export default NavPpal;