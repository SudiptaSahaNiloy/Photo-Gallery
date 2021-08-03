import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import { filterImages } from "../../Redux/actionCreator";
import { authLogout } from "../../Redux/authActionCreators";
import '../../StyleSheet/Header.css';

const mapStateToProps = (state) => {
    return {
        idToken: state.idToken,
        localId: state.localId,
        displayName: state.displayName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterImages: (category) => dispatch(filterImages(category)),
        authLogout: () => dispatch(authLogout()),
    }
}

class Header extends Component {
    state = {
        isOpen: false,
        category: null,
    }

    componentDidMount() {
        // console.log(this.props);
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    handleOnClick = (category) => {
        this.props.filterImages(category);
    }

    render() {
        // console.log(this.props);
        const loggedInNavbar = () => {
            return (
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

                    <UncontrolledDropdown nav inNavbar className="navitem">
                        <DropdownToggle nav caret className="navlink" style={{ marginTop: "-7px" }}>
                            Profile
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink exact activeClassName="selected" to="/" className="navlink">Hi, {this.props.displayName}</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink exact activeClassName="selected" className="navlink" to="/login" onClick={() => this.props.authLogout()}>Logout</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    {/* <NavItem className="navitem">
                        <NavLink exact activeClassName="selected" to="/" className="navlink">Hi, {this.props.displayName}</NavLink>
                    </NavItem>
                    <NavItem className="navitem">
                        <NavLink exact activeClassName="selected" className="navlink" to="/login" onClick={() => this.props.authLogout()}>Logout</NavLink>
                    </NavItem> */}
                </Nav>
            )
        }

        return (
            <div>
                <Navbar color="light" light expand="md" className="navbar">
                    <div className="container">
                        <NavbarBrand href="/" className="navbar-brand">Gallery Store</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {this.props.idToken !== null ? loggedInNavbar() : null}
                            {/* {loggedOutNavbar()} */}
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
