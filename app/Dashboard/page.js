"use client"
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const { setLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div id="dashboardPage">
      <h1 id="dashboard-tag"> Welcome to Dashboard</h1>
      <button id="dashboard-logout" onClick={handleLogout}>
        <Link href="/Register">Log out</Link>
      </button>
    </div>
  );
}
export default Dashboard;
