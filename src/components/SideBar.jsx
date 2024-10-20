// components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Nếu cần thêm style cho Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Admin Menu</h3>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/list-customer">Customers</a></li>
        <li><a href="/orders">Orders</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
