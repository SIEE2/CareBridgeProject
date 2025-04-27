import React from "react";
import { Bell, Menu, Home, MessageSquare, User } from "lucide-react";
import "./NotificationFamily.css";

const NotificationFamily = () => {
  return (
    <div className="notification-container">
      <div className="header">
        <Menu className="icon" />
        <img src="/images/carebridge.png" alt="CareBridge Logo" className="logo" />
        <Bell className="icon" />
      </div>
      <div><h2 className="notifications">Notifications</h2></div>
      <div className="content">
        <div className="notification-box">
          <div className="notification-item">
            <span className="dot"></span>
            <div className="text">
              <strong>Lance Villarta</strong>
              <p>Task breakfast is done!</p>
            </div>
          </div>
          <div className="notification-item">
            <span className="dot"></span>
            <div className="text">
              <strong>Lance Villarta</strong>
              <p>Task daily check up is done!</p>
            </div>
          </div>
          <div className="notification-item">
            <span className="dot"></span>
            <div className="text">
              <strong>Lance Villarta</strong>
              <p>Task morning medicine is done!</p>
            </div>
          </div>
          <div className="notification-item">
            <span className="dot"></span>
            <div className="text">
              <strong>Lance Villarta</strong>
              <p>2 Messages</p>
            </div>
          </div>
        </div>
        <p className="view-all">View All</p>
      </div>
      <div className="footer">
        <Home className="icon" />
        <MessageSquare className="icon" />
        <User className="icon" />
      </div>
    </div>
  );
};

export default NotificationFamily;