import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import Searchbox from './SearchBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './css/styles.css';

const NavPpal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const carrito = <FontAwesomeIcon icon={faShoppingCart} />
  const usuario = <FontAwesomeIcon icon={faUserCircle} />

  return (
    <div>
      <Navbar color="light" light expand="md" className="nav-background">
        <NavbarBrand href="/" className="text-white">Reactive Market</NavbarBrand>
        <Searchbox/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
        </Collapse>
        <NavLink href="/" className="text-white">{carrito}</NavLink>
        <NavLink href="/" className="text-white">{usuario}</NavLink>
      </Navbar>
    </div>
  );
}

export default NavPpal;