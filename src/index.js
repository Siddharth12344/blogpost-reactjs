import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import News from "./News";
import {
    Route,
    HashRouter
} from "react-router-dom";
import blogpost1 from "./blogpost1";
import blogpost2 from "./blogpost2";
import blogpost3 from "./blogpost3";
import "./index.css";

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/blogpost1" component={blogpost1} />
            <Route path="/blogpost2" component={blogpost2} />
            <Route path="/blogpost3" component={blogpost3} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);

ReactDOM.render(
    <News />,
    document.getElementById("ajax-data")
);

