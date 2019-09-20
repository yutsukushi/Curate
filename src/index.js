import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App2 from "./App2"
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

ReactDOM.render(
<Router history={history}> 
<App2 />
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
