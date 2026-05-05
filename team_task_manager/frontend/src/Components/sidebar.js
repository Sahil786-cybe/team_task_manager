import { FaTasks, FaProjectDiagram, FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Task Manager</h2>
      <p><FaTasks /> Dashboard</p>
      <p><FaProjectDiagram /> Projects</p>
      <p><FaUser /> Profile</p>
    </div>
  );
}

export default Sidebar;