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
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import EditFriend from './Components/EditFriend';
import LoginPage from './Components/LoginPage';
import {
  getFriendsAsync,
  addFriendAsync,
  deleteFriendAsync,
  updateFriendAsync,
  getTokenAsync,
  editModeOn,
  editModeOff,
} from './state/actionCreators';

class App extends Component {
  state = {
    addFriend: {
      name: '',
      age: '',
      email: '',
    },
    editFriend: {
      id: '',
      name: '',
      age: '',
      email: '',
    },
    currentFriendEditing: '',
  };

  componentDidMount() {
    this.props.getFriendsAsync();
  }

  addFriendHandler = event => {
    this.setState({
      addFriend: {
        ...this.state.addFriend,
        [event.target.name]: event.target.value,
      },
    });
  };

  resetAdd = () => {
    this.setState({
      addFriend: {
        name: '',
        age: '',
        email: '',
      },
    });
  };

  fireFriendAdd = addFriend => {
    this.props.addFriendAsync(addFriend);
    this.resetAdd();
  };

  editFriendHandler = event => {
    this.setState({
      editFriend: {
        ...this.state.editFriend,
        [event.target.name]: event.target.value,
      },
    });
  };

  resetEdit = () => {
    this.setState({
      editFriend: {
        name: '',
        age: '',
        email: '',
      },
    });
  };

  setFriendEditValue = friend => {
    this.setState({
      editFriend: {
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email,
      },
    });
    this.props.editModeOn();
  };

  fireFriendEdit = editFriend => {
    this.props.updateFriendAsync(editFriend);
    this.resetEdit();
    this.props.editModeOff();
  };

  render() {
    if (this.props.spinner) {
      return <div>Loading...</div>;
    } else {
      return (
        <Router>
        <div className="App">
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/">Friends</Link>
          </nav>
          <Route path="/login" render={() =>  <LoginPage getToken={this.props.getTokenAsync} />}/>
          <Route exact path="/" render = {() =>  (
            localStorage.getItem('token') ?
          (<div>
          <Friends
            friends={this.props.friends}
            setFriendEditValue={this.setFriendEditValue}
            deleteFriendAsync={this.props.deleteFriendAsync}
            editMode={this.props.editMode}
          />
          <AddFriend
            addFriend={this.state.addFriend}
            addFriendHandler={this.addFriendHandler}
            fireFriendAdd={this.fireFriendAdd}
            resetAdd={this.resetAdd}
          />
          <EditFriend
            editFriend={this.state.editFriend}
            editFriendHandler={this.editFriendHandler}
            resetEdit={this.resetEdit}
            fireFriendEdit={this.fireFriendEdit}
          />
          </div>)
          : (
            <Redirect to="/login" />
          )
          )
          }/>
        </div>
        </Router>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
    spinner: state.spinner,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getFriendsAsync,
      addFriendAsync,
      deleteFriendAsync,
      updateFriendAsync,
      getTokenAsync,
      editModeOn,
      editModeOff,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
