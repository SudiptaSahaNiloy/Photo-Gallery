import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import Login from "../Auth/Auth.js";
import Home from "./Home";

const mapStateToProps = (state) => {
    return {
        idToken: state.idToken,
        localId: state.localId,
    }
}

const Body = (props) => {
    let routes = null;

    if (props.idToken === null) {
        routes = (
            <Switch>
                <Route path="/login" exact component={Login} />
                <Redirect to="/login" />
            </Switch>
        )

    } else {
        routes = (
            <Switch>
                <Route path="/home" exact component={Home} />
                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <div>
            {routes}
        </div>
    )
}

export default connect(mapStateToProps)(Body);
