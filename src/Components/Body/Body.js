import { Redirect, Route, Switch } from "react-router";
import Login from "../Auth/Login";
import Home from "./Home";

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    )
}

export default Body;
