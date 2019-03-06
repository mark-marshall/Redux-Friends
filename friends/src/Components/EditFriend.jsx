import React from 'react';

export default function EditFriend({ editFriend, editFriendHandler, cancelEdit }) {
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
      <button type="submit" /*</div>onClick={updateFriend} FIRE THE ACTION CREATOR FROM HERE & GIVE IT VALUES*/>
        Edit Friend
      </button>
      <button type="submit" onClick={cancelEdit} className="cancelButton">
        X
      </button>
    </div>
  );
}
