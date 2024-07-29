import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import "./SelectUser.css";

function SelectUser({}) {
  const { userId, setUserId } = useContext(UserContext);

  const changedUser = (e) => {
    setUserId(Number(e.target.value));
  };

  return (
    <select
      className="select_user"
      name="user"
      id="user"
      value={userId}
      onChange={changedUser}
    >
      <option value="1">Антон</option>
      <option value="2">Вася</option>
    </select>
  );
}

export default SelectUser;
