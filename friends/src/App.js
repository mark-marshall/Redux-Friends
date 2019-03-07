import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

 /* componentDidMount(){
    this.props.getFriendsAsync();
  } */

  addFriendHandler = event => {
    this.setState({
      addFriend: {
        ...this.state.addFriend,
        [event.target.name]: event.target.value,
      },
    });
  };

  editFriendHandler = event => {
    this.setState({
      editFriend: {
        ...this.state.editFriend,
        [event.target.name]: event.target.value,
      },
    });
  };

  cancelEdit = () => {
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
  };

  render() {
    if (this.props.spinner) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <LoginPage />
           <Friends
            friends={this.props.friends}
            setFriendEditValue={this.setFriendEditValue}
            deleteFriendAsync={this.props.deleteFriendAsync}
          />
          <AddFriend
            addFriend={this.state.addFriend}
            addFriendHandler={this.addFriendHandler}
            addFriendAsync={this.props.addFriendAsync}
          />
          <EditFriend
            editFriend={this.state.editFriend}
            editFriendHandler={this.editFriendHandler}
            cancelEdit={this.cancelEdit}
            updateFriendAsync={this.props.updateFriendAsync}
          />
        </div>
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
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
