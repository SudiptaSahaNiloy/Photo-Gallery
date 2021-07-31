import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import '../../StyleSheet/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="navbar">
                <div className="container">
                    <NavbarBrand href="/" className="navbar-brand">Gallery Store</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto nav " navbar>
                            <NavItem className="navitem">
                                <NavLink exact activeClassName="selected" to="/home" className="navlink">Home</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar className="navitem">
                                <DropdownToggle nav caret className="navlink" style={{ marginTop: "-7px" }}>
                                    Category
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink exact to="/login" style={{ textDecoration: "none", color: "black" }}>Option1</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink exact to="/login" style={{ textDecoration: "none", color: "black"}}>Option2</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink exact to="/home" style={{ textDecoration: "none", color: "black"}}>Reset</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem className="navitem">
                                <NavLink exact activeClassName="selected" className="navlink" to="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;
