"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ContractsPanel from "@/components/ContractsPanel";
import EmployeePanel from "@/components/EmloyeePanel";
import InsightsAppPanel from "@/components/InsightsAppPanel";
import { useState } from "react";

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<
    "applications" | "contracts" | "employee"
  >("applications");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Sidebar />
      <main className="p-4 lg:ml-64 lg:mt-0 mt-16">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8 space-y-8 max-w-screen-2xl">
          {activeTab === "applications" && <InsightsAppPanel />}
          {activeTab === "contracts" && <ContractsPanel />}
          {activeTab === "employee" && <EmployeePanel />}
        </div>
      </main>
    </div>
  );
}

