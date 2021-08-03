import Header from "./Header/Header";
import Body from "./Body/Body";
import { authCheck } from "../Redux/authActionCreators";
import { connect } from "react-redux";
import { Component } from "react";
// import Footer from "./Footer/Footer";

const mapDispatchToProps = (dispatch) => {
    return ({
        authCheck: () => dispatch(authCheck())
    })
}


class Main extends Component {
    componentDidMount(){
        this.props.authCheck();
    }
    
    render() {
        return (
            <div>
                <Header />
                <Body />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Main);
