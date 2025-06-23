import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen bg-[#1C1C1C] p-9">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
