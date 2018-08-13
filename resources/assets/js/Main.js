import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router} from 'react-router-dom';
import Routes from './Routes';


export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Router>
                    <Routes />
                </Router>
            </div>
        );
    }
}

// export default Main;
ReactDOM.render(
    <Main />, document.getElementById('root')
 );

