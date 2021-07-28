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
                                <NavLink exact activeClassName="selected" to="/" className="navlink">Home</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar className="navitem">
                                <DropdownToggle nav caret className="navlink" style={{ marginTop: "-7px" }}>
                                    Category
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
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
