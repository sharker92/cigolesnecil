"use client"
import { FaShieldAlt, FaProjectDiagram, FaAtlassian, FaGithub, FaSlack } from 'react-icons/fa';

export default function InactiveTable() {
  const accounts = [
    { app: 'NUDGE SECURITY', total: 33, inactive: 2, abandoned: 5 },
    { app: 'ASANA', total: 9, inactive: 1, abandoned: 2 },
    { app: 'ATLASSIAN', total: 8, inactive: 4, abandoned: 3 },
    { app: 'GITHUB', total: 4, inactive: 1, abandoned: 1 },
    { app: 'SLACK', total: 70, inactive: 2, abandoned: 6 },
  ];

  const getAppIcon = (appName: string) => {
    switch(appName.toUpperCase()) {
      case 'NUDGE SECURITY':
        return <FaShieldAlt className="w-5 h-5 text-blue-600" />;
      case 'ASANA':
        return <FaProjectDiagram className="w-5 h-5 text-purple-600" />;
      case 'ATLASSIAN':
        return <FaAtlassian className="w-5 h-5 text-red-600" />;
      case 'GITHUB':
        return <FaGithub className="w-5 h-5 text-gray-800" />;
      case 'SLACK':
        return <FaSlack className="w-5 h-5 text-yellow-600" />;
      default:
        return <FaShieldAlt className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow mt-6">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="pb-4 text-left font-semibold text-gray-900 w-2/5">Application</th>
            <th className="pb-4 text-left font-semibold text-gray-900 w-2/5">Progress</th>
            <th className="pb-4 text-center font-semibold text-gray-900 w-1/5">Inactive/Abandoned vs All</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => {
            const inactivePercentage = (account.inactive / account.total) * 100;
            const abandonedPercentage = (account.abandoned / account.total) * 100;
            const remainingPercentage = 100 - inactivePercentage - abandonedPercentage;

            return (
              <tr key={account.app} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    {getAppIcon(account.app)}
                    <span className="font-medium text-gray-900">{account.app}</span>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <div className="w-full h-2 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-red-500" 
                      style={{ width: `${inactivePercentage}%` }}
                    />
                    <div 
                      className="h-full bg-orange-400" 
                      style={{ width: `${abandonedPercentage}%` }}
                    />
                    <div 
                      className="h-full bg-green-300" 
                      style={{ width: `${remainingPercentage}%` }}
                    />
                  </div>
                </td>
                <td className="py-4 text-center px-6">
                  <span className="font-medium text-gray-900">
                    {account.inactive + account.abandoned}/{account.total}
                  </span>
                </td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  );
}

