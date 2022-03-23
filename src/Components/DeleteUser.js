import React from "react";

const DeleteUser = ({ userEliminated, setIsShowingDelete }) => {
  return (
    <div id="delete-container">
      <h3 className="title-delete">Delete User</h3>
      <p className="info-delete">
        The user {userEliminated.first_name} {userEliminated.last_name} has been
        deleted{" "}
      </p>
      <button className="delete-button" onClick={() => setIsShowingDelete(false)}>Accept</button>
    </div>
  );
};

export default DeleteUser;