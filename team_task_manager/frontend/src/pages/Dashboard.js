import { useEffect, useState } from "react";
import API from "../api";
import Sidebar from "../Components/sidebar";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await API.get("/tasks");
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const completed = tasks.filter(t => t.status === "done").length;
  const pending = tasks.filter(t => t.status === "todo").length;
  const progress = tasks.filter(t => t.status === "in-progress").length;

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h2>Dashboard</h2>

        {/* STATS CARDS */}
        <div className="grid">
          <div className="card">Total Tasks: {tasks.length}</div>
          <div className="card">Completed: {completed}</div>
          <div className="card">Pending: {pending}</div>
        </div>

        {/* TASK LIST */}
        <h3>Tasks</h3>

        {tasks.map(task => (
          <div className="card" key={task.id}>
            <h4>{task.title}</h4>
            <p>Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;