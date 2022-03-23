import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";
import DeleteUser from "./Components/DeleteUser";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState(null);
  const [isShowing, setIsShowing] = useState(false);
  const [userEliminated, setUserEliminated] = useState({});
  const [isShowingDelete, setIsShowingDelete] = useState(false);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUser = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const removeUser = (user) => {
    const name = {};
    name["first_name"] = user.first_name;
    name["last_name"] = user.last_name;
    setUserEliminated(name);
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
      .then(() => getUser());
    setIsShowingDelete(true);
  };

  return (
    <div className="App">
      <h1><b>USERS</b></h1>
      <button id="create" onClick={() => setIsShowing(!isShowing)}>
        <i class="fa-solid fa-plus"> </i> Create new user
      </button>

      {isShowing ? (
        <UserForm
          userEdit={userEdit}
          getUser={getUser}
          setUserEdit={setUserEdit}
          setIsShowing={setIsShowing}
        />
      ) : (
        ""
      )}

      <UserList
        setIsShowing={setIsShowing}
        users={users}
        removeUser={removeUser}
        setUserEdit={setUserEdit}
      />

      {isShowingDelete ? (
        <DeleteUser
          userEliminated={userEliminated}
          setIsShowingDelete={setIsShowingDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
