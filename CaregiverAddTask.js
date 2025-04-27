import React, { useState } from 'react';
import './CaregiverAddTask.css';
import { Bell, Menu, Home, MessageSquare, User, ArrowLeft } from "lucide-react";

const CaregiverAddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddTask = () => {
    console.log({ taskTitle, description, date, time });
  };

  return (
    <div className="page">
      {/* Fixed Logo */}
      <div className="addtaskheader">
             <Menu className="icon" />
             <img src="/images/carebridge.png" alt="CareBridge Logo" className="logo" />
             <Bell className="icon" />
      </div>

      {/* Scrollable Main Content */}
      <div className="main-content">
        <div className="addtaskcontainer">
          <div className="top-row">
            <ArrowLeft className="back-icon" strokeWidth={3}/>
            <h2 className="title">Add Task</h2>
          </div>

          <div className="task-container">
            <input
              className="input"
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className="input"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button className="add-button" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="footer">
        <Home className="icon" />
        <MessageSquare className="icon" />
        <User className="icon" />
      </div>
    </div>
  );
};

export default CaregiverAddTask;