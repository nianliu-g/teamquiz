import * as React from "react";
import Header from "./Common/Header";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./Common/PageNotFound";
import HomePage from "./Home/HomePage";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
