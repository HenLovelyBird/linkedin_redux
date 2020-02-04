import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-image-crop/dist/ReactCrop.css';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store'
import { Provider } from 'react-redux'
import Navigation from './Components/Navigation'
import Profile from './Components/Profile'
import CurrentUserPage from './Components/CurrentUserPage'
import Newsfeed from './Components/Newsfeed'


ReactDOM.render(
    <Provider store={configureStore()} >
        <Router>
            {/* <Navigation logout={this.props.logout}/> */}
            <Navigation />
            <Switch>
                <Route path="App" component={App} />
                <Route path="/Profile" exact component={Profile} />
                <Route path="/currentUserPage:userId" component={CurrentUserPage} />
                <Route path="/Newsfeed" component={Newsfeed} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
