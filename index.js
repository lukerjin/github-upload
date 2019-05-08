import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

var destination = document.querySelector("#container");

const Home = () => <div>Home</div>;
const About = () => <div>About {}</div>;
const User = ({ match }) => <h1>Hello {match.params.username}</h1>;
const NoMatch = () => <h1>404 page</h1>;
const ListItemLink = ({ to, ...rest }) => (
    <Route
        path={to}
        children={({ match }) => (
            <li className={match ? "active" : ""}>
                <Link to={to} {...rest}>{rest.value}</Link>
            </li>
        )}
    />
);
const App =() =>{
    const someVariable = true;

    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route
                path="/about"
               render={props => <About {...props} />}
            />
           <Route path="/user/:username" component={User}/>
           <Route path="/render" render={() => <div>Render</div>}/>
            <ul>
                <ListItemLink to={"/somewhere"} value="Click to somewhere"/>
                <ListItemLink to={"/somewhere-else"} value="Click to somewhere-else" />
            </ul>
           <Route component={NoMatch}/>

        </Switch>
    );
}


ReactDOM.render(
    <BrowserRouter basename="/" >
       <App />
    </BrowserRouter>,
    destination
);