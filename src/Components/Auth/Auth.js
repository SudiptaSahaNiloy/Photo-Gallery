import { Formik } from "formik";
import { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Col, Row } from 'reactstrap';
import { auth } from "../../Redux/authActionCreators"

const mapStateToProps = (state) => {
    return {
        idToken: state.idToken,
        localId: state.localId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (firstName, lastName, email, password, mode) => dispatch(auth(firstName, lastName, email, password, mode)),
    }
}

class Auth extends Component {
    state = {
        authMode: "signInWithPassword",
    }

    render() {
        const signUpForm = (values, handleChange, handleSubmit) => {
            return (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="text"
                                    onChange={handleChange}
                                    name="firstName"
                                    values={values.firstName}
                                    placeholder="First Name" />
                            </FormGroup>
                        </Col><br />
                        <Col>
                            <FormGroup>
                                <Input
                                    type="text"
                                    onChange={handleChange}
                                    name="lastName"
                                    values={values.lastName}
                                    placeholder="Last Name" />
                            </FormGroup>
                        </Col><br />
                    </Row><br />
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                    type="email"
                                    onChange={handleChange}
                                    name="email"
                                    values={values.email}
                                    placeholder="Write your email" />
                            </FormGroup>
                        </Col><br />
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                    type="password"
                                    onChange={handleChange}
                                    name="password"
                                    values={values.password}
                                    placeholder="Password" />
                            </FormGroup>
                        </Col><br />
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                    type="password"
                                    onChange={handleChange}
                                    name="confirmPassword"
                                    values={values.confirmPassword}
                                    placeholder="Confirm Password" />
                            </FormGroup>
                        </Col><br />
                    </Row>
                    <div>
                        Already signed up?
                        <a href="/login" style={{ textDecoration: "none" }}> Login</a>
                    </div><br />
                    <div className="d-flex justify-content-center">
                        <Button
                            type="submit"
                            style={{
                                width: "100%",
                                backgroundColor: "#1877F2",
                                fontSize: "20px",
                                fontWeight: "lighter",
                            }}>
                            Sign Up
                        </Button>
                    </div>
                </Form>
            )
        }

        const loginForm = (values, handleChange, handleSubmit) => {
            return (
                <Form inline onSubmit={handleSubmit}>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Input
                            type="email"
                            values={values.email}
                            name="email"
                            onChange={handleChange}
                            placeholder="Email address" />
                    </FormGroup><br />
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Input
                            type="password"
                            values={values.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password" />
                    </FormGroup><br />
                    <div className="d-flex justify-content-center">
                        <Button
                            type="submit"
                            style={{
                                width: "100%",
                                backgroundColor: "#1877F2",
                                fontSize: "20px",
                                fontWeight: "lighter",
                            }}>
                            Login
                        </Button>
                    </div>
                    <hr /><br />
                    <div className="d-flex justify-content-center">
                        <Button
                            onClick={() => this.setState({ authMode: "signUp" })}
                            style={{ width: "80%", backgroundColor: "#42B72A", fontSize: "20px" }}>
                            Create New Account
                        </Button>
                    </div>
                </Form>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "10%" }}>
                        <img src="assets/images/LoginBanner.svg" alt="Login Banner" style={{ width: "100%" }} />
                    </div>
                    <div className="col-md-6">
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                            }}

                            onSubmit={
                                (values) => {
                                    this.props.auth(values.firstName, values.lastName, values.email, values.password, this.state.authMode)
                                }
                            }
                        >
                            {({ values, handleChange, handleSubmit }) => {
                                return (
                                    <div className="p-5" style={{ marginTop: "20%", marginLeft: "5rem", width: "70%", boxShadow: "10px 10px 5px grey" }}>
                                        {this.state.authMode === "signInWithPassword" ?
                                            loginForm(values, handleChange, handleSubmit) : signUpForm(values, handleChange, handleSubmit)}
                                    </div>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);