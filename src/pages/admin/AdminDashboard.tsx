import { useEffect, useState } from "react";
import GetCurrentTime from "../../utils/GetCurrentTime";

const AdminDashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString();
      setCurrentDateTime(formattedDateTime);
    };
    // Update the time initially
    updateDateTime();
    // Set up interval to update the time every second
    const intervalId = setInterval(updateDateTime, 1000);
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <GetCurrentTime />
      <h1>Admin Dashbaord</h1>
      <p>{currentDateTime}</p>
    </div>
  );
};

export default AdminDashboard;
