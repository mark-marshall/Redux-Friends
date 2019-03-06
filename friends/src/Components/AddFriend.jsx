import React from 'react';

export default function AddFriend({ addFriend, addFriendHandler }) {
  return (
    <div>
       <input
          placeholder="Name"
          name="name"
          type="text"
           onChange={event => addFriendHandler(event)}
           value={addFriend.name}
        />
        <input
          placeholder="Age"
          name="age"
          type="number"
           onChange={event => addFriendHandler(event)}
           value={addFriend.age}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
           onChange={event => addFriendHandler(event)}
           value={addFriend.email}
        />
        <button className="addButton" /*onClick={postFriend}*/ type="submit">
          Add Friend
        </button>
    </div>
  );
}
