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
  getTokenAsync,
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

  componentDidMount(){
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
      }
    })
  }

  fireFriendAdd = addFriend => {
    this.props.addFriendAsync(addFriend);
    this.resetAdd();
  }

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
  };

  fireFriendEdit = editFriend => {
    this.props.updateFriendAsync(editFriend);
    this.resetEdit();
  }

  render() {
    if (this.props.spinner) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <LoginPage getToken={this.props.getTokenAsync}/>
           <Friends
            friends={this.props.friends}
            setFriendEditValue={this.setFriendEditValue}
            deleteFriendAsync={this.props.deleteFriendAsync}
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
      getTokenAsync,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
