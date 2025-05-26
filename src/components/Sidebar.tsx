"use client"
import { useState } from 'react';
import { FaChartLine} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('dashboard');
  
  const links = [
      { id: 'dashboard', text: 'Dashboard', icon: <FaHome /> },
    { id: 'analytics', text: 'Analytics', icon: <FaChartLine /> },
    // ... other links
  ];

  return (
    <nav className="w-64 fixed h-screen bg-white shadow-lg">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => setActiveLink(link.id)}
          className={`flex items-center p-4 w-full ${
            activeLink === link.id 
              ? 'bg-blue-50 text-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {link.icon}
          {link.text}
        </button>
      ))}
    </nav>
  );
}

