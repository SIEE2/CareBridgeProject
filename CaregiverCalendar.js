import React, { useState } from 'react';
import { Bell, Menu, Home, MessageSquare, User, ArrowLeft, ArrowBigLeft } from 'lucide-react';
import './CaregiverCalendar.css';

const CaregiverCalendar = () => {
  // State for the current month and year
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4)); // May 2025
  const [selectedDate, setSelectedDate] = useState(null);

  // Highlighted dates for May 2025 (as per the image: 2, 6, 9, 29)
  const highlightedDates = [
    { date: new Date(2025, 4, 2), key: '2025-5-2' },
    { date: new Date(2025, 4, 6), key: '2025-5-6' },
    { date: new Date(2025, 4, 9), key: '2025-5-9' },
    { date: new Date(2025, 4, 29), key: '2025-5-29' },
  ];

  // Schedule data
  const schedule = [
    { time: '11 am', task: 'Lunch' },
    { time: '10 am', task: 'Work task' },
    { time: '9 am', task: 'Take a shower' },
  ];

  // Get the month and year for display
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Calculate the first day of the month and the number of days in the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Days of the week
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Handle month navigation
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Handle date selection
  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  // Check if a date is highlighted
  const isHighlighted = (day) => {
    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
    return highlightedDates.some((hd) => hd.key === dateKey);
  };

  // Check if a date is selected
  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  return (
    <div className="notification-container">
      <div className="header">
        <Menu className="icon" />
        <img src="/images/carebridge.png" alt="CareBridge Logo" className="logo" />
        <Bell className="icon" />
      </div>

      {/* Calendar Section */}
      
      <div className="calendar-section">
        <div className="top-row">
                    <ArrowLeft className="back-icon" strokeWidth={3} />
                    <h2 className="title">Calendar</h2>
                  </div>
        <div className="calendar-container">

          {/* Month Header with Navigation */}
          <div className="month-header">
            <button onClick={handlePrevMonth} className="nav-button">◄</button>
            <span>{`${monthNames[currentMonth]} ${currentYear}`}</span>
            <button onClick={handleNextMonth} className="nav-button">►</button>
          </div>

          {/* Days of the Week */}
          <div className="days-of-week">
            {daysOfWeek.map((day, index) => (
              <span key={index} className="day-label">
                {day}
              </span>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="calendar-days">
            {/* Add empty spaces for days before the first day of the month */}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} className="empty-day"></div>
            ))}

            {/* Render the days of the month */}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`calendar-day ${
                  isHighlighted(day) ? 'highlighted' : ''
                } ${isSelected(day) ? 'selected' : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div className="schedule">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`schedule-item ${
                  item.time === '10 am' ? 'highlighted-task' : ''
                }`}
              >
                <span className="time">{item.time}</span>
                <span className="task">{item.task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <Home className="icon" />
        <MessageSquare className="icon" />
        <User className="icon" />
      </div>
    </div>
  );
};

export default CaregiverCalendar;