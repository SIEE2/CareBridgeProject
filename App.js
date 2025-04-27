import React, { useState } from "react";
import CaregiverSignIn from './CaregiverSignIn';
import FamilySignIn from "./FamilySignIn";
import FamilySignUp from "./FamilySignUp";
import NotificationFamily from "./NotificationFamily";
import CaregiverAddTask from "./CaregiverAddTask";
import CaregiverTaskOverview from "./CaregiverTaskOverview";
import CaregiverCalendar from "./CaregiverCalendar";

function App() {
  const [userType] = useState("caregiveraddtask");

  return (
    <div>
      {userType === "caregiversignin" && <CaregiverSignIn />}
      {userType === "familysignin" && <FamilySignIn />}
      {userType === "familysignup" && <FamilySignUp />}
      {userType === "notificationfamily" && <NotificationFamily />}
      {userType === "caregiveraddtask" && <CaregiverAddTask />}
      {userType === "caregivertaskoverview" && <CaregiverTaskOverview />}
      {userType === "caregivercalendar" && <CaregiverCalendar />}
    </div>
  );
}

export default App;
