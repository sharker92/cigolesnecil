import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AdoptionChart from "../../components/AdoptionChart";
import InactiveTable from "../../components/InactiveTable";

export default function InsightsPage() { return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <Sidebar />
    <main className="ml-64 p-4">
      {" "}
      {/* Offset for sidebar width */}
      <Header />
      <AdoptionChart />
      <InactiveTable />
    </main>
  </div>
);
}

