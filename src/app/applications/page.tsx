import Sidebar from '../../components/Sidebar'

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="ml-64 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Applications Page</h1>
      </main>
    </div>
  )
}

