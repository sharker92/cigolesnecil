import Sidebar from "../../components/Sidebar";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="lg:ml-64 p-4 mt-16 lg:mt-0">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Settings Page
        </h1>
      </main>
    </div>
  );
}

