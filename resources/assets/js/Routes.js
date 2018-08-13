import React, {Component, Fragment} from 'react';
import {Route, Link} from 'react-router-dom';

// import the components you;re using in router(the components that are pages)
import Example from './components/Example';
import Home from './containers/Home';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                {/* the component Example will render at the endpoin /example */}
                <Route exact path="/" component={Home} />
                <Route exact path="/example" component={Example} />
                {/* add here more routes */}
            </Fragment>
        );
    }
}

export default Routes;
