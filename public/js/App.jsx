import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/page/header.jsx';
import Home from './component/page/home.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path={'/'} render={(route) => (
                            <Home title="Home" route={route} />
                        )} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default (App);
