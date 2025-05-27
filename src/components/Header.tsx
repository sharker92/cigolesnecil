"use client";
import MetricCard from "./MetricCard";
import { FaRegFileAlt } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";

type HeaderProps = {
  activeTab: "applications" | "contracts" | "employee";
  setActiveTab: (tab: "applications" | "contracts" | "employee") => void;
};

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: "contracts" as const, label: "Contracts" },
    { id: "applications" as const, label: "Applications" },
    { id: "employee" as const, label: "Employee" },
  ];

  return (
    <header className="p-4 bg-white dark:bg-gray-800 transition-colors rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Insights
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        />
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-2 w-max min-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <MetricCard
          title="Total Applications"
          value="2,342"
          icon={<FaRegFileAlt className="w-6 h-6 text-blue-500" />}
        />
        <MetricCard
          title="Avg. Utilization"
          value="72%"
          icon={<FiActivity className="w-6 h-6 text-green-500" />}
        />
        <MetricCard
          title="Saving Potential"
          value="204k"
          icon={<FaMoneyBillWave className="w-6 h-6 text-purple-500" />}
        />
      </div>
    </header>
  );
}

