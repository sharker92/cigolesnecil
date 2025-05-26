"use client"
import { useState } from 'react';
import MetricCard from './MetricCard';

export default function Header() {
  const [activeTab, setActiveTab] = useState('applications');
  
  const tabs = [
    { id: 'applications', label: 'Applications' },
    { id: 'contracts', label: 'Contracts' },
    { id: 'employee', label: 'Employee' },
  ];

  return (
    <header className="ml-64 p-6 bg-white border-b">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6 mt-6">
        <MetricCard title="Total Applications" value="2,342" />
        <MetricCard title="Avg. Utilization" value="82%" />
        {/* Other metrics */}
      </div>
    </header>
  );
}

