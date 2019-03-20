import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router'
import { BrowserRouter, Route, Link,HashRouter } from 'react-router-dom';
import './index.css';
//import App, { Clocktwo } from './App';
import { App, Clocktwo, Cl,Likebutton } from './App';
//import Clocktwo from './App';
import * as serviceWorker from './serviceWorker';
const ListItemLink = () => (
    <div className="base">
        <hader>
            <p>React Router v4 Browser Example</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/clock1">Cl</Link></li>
                    <li><Link to="/clock2">clock2</Link></li>
                    <li><Link to="/Likebutton">Likebutton</Link></li>
                </ul>
            </nav>
        </hader>
        <div className="container">
            <ul>
                <Route path='/' exact component={App}></Route>
                <Route path='/clock1' exact component={Cl}></Route>
                <Route path='/clock2' exact component={Clocktwo}></Route>
                <Route path='/Likebutton' exact component={Likebutton}></Route>
            </ul>
        </div>
    </div>
)
const Nav = () => (
    <BrowserRouter>
        <ListItemLink />
    </BrowserRouter>
)
ReactDOM.render(<Nav />, document.getElementById('root'));
//<App />, <Clock />, <Clocktwo />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// BrowserRouter 和 HashRouter是react前端路由的两种模式。前者是html5history模式，后者是#哈希路由模式