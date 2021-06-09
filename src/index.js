import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/Store/store'
import {Provider} from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './Components/HomePage/homePage';
import Header from './Components/Header/header';
import Results from './Components/Results/results';
import ErrorPage from './Components/errorPage';

const routing = (
    <Router>
        <div style={{minHeight: "100vh", display:"flex", flexDirection:"column"}}>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/results" component={Results} exact />
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>,
    document.getElementById('root')
);
