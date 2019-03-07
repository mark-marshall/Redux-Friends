import React from 'react';

export default function Friends({ friends, setFriendEditValue, deleteFriendAsync  }) {
  return friends.map(friend => (
    <div key={friend.id}>
      <h1>{friend.name}</h1>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button
        className="editButton"
        onClick={() => setFriendEditValue(friend)}
        type="submit"
        value={friend}
      >
        Edit
      </button>
      <button
        className="deleteButton"
        onClick={() => deleteFriendAsync(friend.id)}
        value={friend.id}
        type="submit"
      >
        Delete
      </button>
    </div>
  ));
}
