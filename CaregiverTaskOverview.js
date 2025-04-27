import React from "react";
import { Bell, Menu, CalendarDays, PlusCircle, Home, MessageSquare, User } from "lucide-react";
import "./CaregiverTaskOverview.css";

const CaregiverTaskOverview = () => {
  return (
    <div className="task-overview-container">
      {/* Header */}
      <div className="header">
              <Menu className="icon" />
              <img src="/images/carebridge.png" alt="CareBridge Logo" className="logo" />
              <Bell className="icon" />
      </div>

      {/* Main Content */}
      <div className="overview-content">
        {/* Title */}
        <h2 className="title">Task Overview</h2>

        {/* Buttons */}
        <div className="button-group">
          <button className="calendar-btn">
            <CalendarDays size={18} /> Calendar
          </button>
          <button className="add-task-btn">
            <PlusCircle size={18} /> Add new Task
          </button>
        </div>

        {/* Task Box */}
        <div className="task-box">
          <div className="task-section">
            <h3>Completed</h3>
            <ul>
              <li>Breakfast</li>
              <li>Morning Medicine</li>
              <li>Morning Routine</li>
            </ul>
          </div>
          <div className="task-section">
            <h3>To do</h3>
            <ul>
              <li>Daily Check up</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="footer">
        <Home className="icon" />
        <MessageSquare className="icon" />
        <User className="icon" />
      </div>
    </div>
  );
};

export default CaregiverTaskOverview;
