import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const UserForm = ({ getUser, userEdit, setUserEdit, setIsShowing }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (userEdit) {
      setEmail(userEdit.email);
      setPassword(userEdit.password);
      setFirstName(userEdit.first_name);
      setLastName(userEdit.last_name);
      setBirthday(userEdit.birthday);
    }
  }, [userEdit]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
      first_name,
      last_name,
      birthday,
    };
    if (userEdit) {
      axios
        .put(`https://users-crud1.herokuapp.com/users/${userEdit.id}/`, user)
        .then(() => {
          getUser();
          setUserEdit(null);
          reset();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => {
          getUser();
          reset();
        })
        .catch((error) => console.log(error.res));
    }
    setIsShowing(false);
  };

  const reset = () => {
    setUserEdit(null);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setBirthday("");
    setIsShowing(false);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <h2>NEW USER</h2>
      </div>

      <div className="input-container">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
          placeholder=" Name"
        />
      </div>

      <div className="input-container">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
          placeholder=" Last-Name"
        />
      </div>

      <div className="input-container">
        <label htmlFor=" email">Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder=" Email"
        />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder=" Password"
        />
      </div>

      <div className="input-container">
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
      </div>
      <div id="container-button">
        <button id="button1" type="submit">
          Submit
        </button>
        <button id="button2" onClick={() => reset()} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;