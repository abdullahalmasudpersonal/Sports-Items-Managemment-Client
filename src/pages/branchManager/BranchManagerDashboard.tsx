import { useEffect, useState } from "react";
import GetCurrentTime from "../../utils/GetCurrentTime";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const BranchManagerDashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");
  const user = useAppSelector(selectCurrentUser);
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
      <h1>Branch Manager Dashbaord</h1>
      <p>{currentDateTime}</p>
      <h3>Banch Manager Name:- {user?.username}</h3>
    </div>
  );
};

export default BranchManagerDashboard;
