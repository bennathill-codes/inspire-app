import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Dashboard</h1>
      {user ? <h2>Hi, {user.username}!</h2> : <h1>Loading...</h1>}
    </div>
  );
}
