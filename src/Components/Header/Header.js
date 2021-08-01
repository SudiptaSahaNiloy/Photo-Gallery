import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import { filterImages } from "../../Redux/actionCreator";
import '../../StyleSheet/Header.css';

const mapDispatchToProps = (dispatch) => {
    return {
        filterImages: (category) => dispatch(filterImages(category)),
    }
}

class Header extends Component {
    state = {
        isOpen: false,
        category: null,
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    handleOnClick = (category) => {
        this.props.filterImages(category);
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" className="navbar">
                    <div className="container">
                        <NavbarBrand href="/" className="navbar-brand">Gallery Store</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto nav " navbar>
                                <NavItem className="navitem">
                                    <NavLink onClick={() => this.handleOnClick(null)} exact activeClassName="selected" to="/home" className="navlink">Home</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar className="navitem">
                                    <DropdownToggle nav caret className="navlink" style={{ marginTop: "-7px" }}>
                                        Category
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <div onClick={() => this.handleOnClick("General")} style={{ textDecoration: "none", color: "black" }}>General</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div onClick={() => this.handleOnClick("Naruto")} style={{ textDecoration: "none", color: "black" }}>Naruto</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div onClick={() => this.handleOnClick("React")} style={{ textDecoration: "none", color: "black" }}>React</div>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <div onClick={() => this.handleOnClick(null)} style={{ textDecoration: "none", color: "black" }}>Reset</div>
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
}

export default connect(null, mapDispatchToProps)(Header);
