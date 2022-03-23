import React from "react";

const UserList = ({ users, setUserEdit, removeUser, setIsShowing }) => {
  const clickEditButton = (user) => {
    setUserEdit(user);
    setIsShowing(true);
  };

  return (
    <ul className="container-card">
      {users.map((user) => (
        <li key={user.id}>
          <h4>
            <b>{user.first_name} </b> <span>{user.last_name}</span>
          </h4>
          <p className="title-card">
            <b>Email</b>
          </p>
          <span id="info-card">{user.email}</span>
          <p className="title-card">
            <b>Birthday</b>
            <span id="info-gift"></span>
          </p>
          <span id="info-card2">
            <i class="fa-solid fa-gift"></i>
              { user.birthday}
          </span>
          <div>
            <button className="trash" onClick={() => removeUser(user)}>
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <button className="edit-pen" onClick={() => clickEditButton(user)}>
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;