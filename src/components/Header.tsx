"use client";
import { useState } from "react";
import MetricCard from "./MetricCard";

type HeaderProps = {
  activeTab: 'applications' | 'contracts' | 'employee';
  setActiveTab: (tab: 'applications' | 'contracts' | 'employee') => void;
};

export default function Header({ activeTab, setActiveTab }: HeaderProps) {

  const tabs = [
    { id: "contracts", label: "Contracts" },
    { id: "applications", label: "Applications" },
    { id: "employee", label: "Employee" },
  ];

  return (
    <header className="ml-64 p-4 bg-white ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Insights</h1>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-64 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <MetricCard title="Total Applications" value="2,342" />
        <MetricCard title="Avg. Utilization" value="72%" />
        <MetricCard title="Saving Potential" value="204k" />
      </div>
    </header>
  );
}

