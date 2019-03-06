import React, { Component } from 'react';
import './App.css';
import Friends from './Components/Friends';
import AddFriend from './Components/AddFriend';
import EditFriend from './Components/EditFriend';

class App extends Component {
  state = {
    friends: [{
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
  ]
  }
  render() {
    return (
      <div className="App">
       <Friends friends={this.state.friends} />
       <AddFriend />
       <EditFriend />
      </div>
    );
  }
}

export default App;
