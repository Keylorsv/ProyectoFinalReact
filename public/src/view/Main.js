import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Crear from "./Crear"
import About from "./About"


function Main() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/crear' component={Crear} />
                <Route path='/about' component={About} />
            </Switch>
        </div>
    );
}

export default Main;