import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Protected from './Protected';
import LoginPage from './Components/LoginPage';
import { getTokenAsync } from './state/actionCreators';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/friends">Friends</Link>
            <Link to="/">Login</Link>
          </nav>

          <Route
            exact path="/"
            render={() => <LoginPage getToken={this.props.getTokenAsync} />}
          />

          <Route
            path="/friends"
            render={() =>
              localStorage.getItem('token') ? (
                <Protected />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTokenAsync,
    },
    dispatch,
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
