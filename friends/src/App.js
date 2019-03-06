import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import EditFriend from './Components/EditFriend';
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
      name: '',
      age: '',
      email: '',
    },
    editMode: false,
    currentFriendEditing: '',
  };

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
       name: friend.name,
       age: friend.age,
       email: friend.email,
     }
   })
  }

  render() {
    if (this.props.spinner) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Friends friends={this.props.friends} setFriendEditValue={this.setFriendEditValue} />
          <AddFriend
            addFriend={this.state.addFriend}
            addFriendHandler={this.addFriendHandler}
          />
          <EditFriend
            editFriend={this.state.editFriend}
            editFriendHandler={this.editFriendHandler}
            cancelEdit={this.cancelEdit}
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
