import { Route, Switch } from "react-router";
import Login from "../Auth/Login";
import Home from "./Home";

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </div>
    )
}

export default Body;
