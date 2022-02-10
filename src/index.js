import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router-dom";
import history from './components/History';
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import "./styles/index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
