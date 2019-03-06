import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import EditFriend from './Components/EditFriend';

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
        <Friends friends={this.props.friends} />
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

function mapStateToProps(state){
  return {
    friends: state.friends,
    spinner: state.spinner,
    error: state.error,
  }
}

export default connect(mapStateToProps)(App);
