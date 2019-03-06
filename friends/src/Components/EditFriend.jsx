import React from 'react';

export default function EditFriend() {
  return (
    <div>
      <input
        placeholder="Name"
        name="name"
        type="text"
        // onChange={event => addFriendHandler(event)}
        // value={addFriend.name}
      />
      <input
        placeholder="Age"
        name="age"
        type="number"
        // onChange={event => addFriendHandler(event)}
        // value={addFriend.age}
      />
      <input
        placeholder="Email"
        name="email"
        type="text"
        // onChange={event => addFriendHandler(event)}
        // value={addFriend.email}
      />
      <button type="submit" /*</div>onClick={updateFriend}*/>
        Edit Friend
      </button>
      <button type="submit" /*onClick={cancelEdit}*/ className="cancelButton">
        X
      </button>
    </div>
  );
}
