import React from 'react';

export default function EditFriend({ editFriend, editFriendHandler, resetEdit, fireFriendEdit }) {
  return (
    <div>
      <input
        placeholder="Name"
        name="name"
        type="text"
         onChange={event => editFriendHandler(event)}
         value={editFriend.name}
      />
      <input
        placeholder="Age"
        name="age"
        type="number"
         onChange={event => editFriendHandler(event)}
         value={editFriend.age}
      />
      <input
        placeholder="Email"
        name="email"
        type="text"
         onChange={event => editFriendHandler(event)}
         value={editFriend.email}
      />
      <button type="submit" onClick={() => fireFriendEdit(editFriend)}>
        Edit Friend
      </button>
      <button type="submit" onClick={resetEdit} className="cancelButton">
        X
      </button>
    </div>
  );
}
