import React, { Component } from 'react';

import './App.css';
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import EditFriend from './Components/EditFriend';

class App extends Component {
  state = {
    friends: [
      {
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
      },
      {
        id: 2,
        name: 'Steven',
        age: 24,
        email: 'stven@lambdaschool.com',
      },
    ],
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
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
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

export default App;
