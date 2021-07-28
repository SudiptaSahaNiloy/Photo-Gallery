import { Route, Switch } from "react-router";
import Home from "./Home/Home";
import Login from "../Auth/Login";

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
