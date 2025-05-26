"use client"
export default function InactiveTable() {
  const accounts = [
    { app: 'Slack', total: 33, current: 2 },
    // ... mock data
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow mt-6 ml-64">
      <table className="w-full">
        <thead>
          <tr>
            <th>Application</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.app}>
              <td>{account.app}</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all"
                      style={{ width: `${(account.current/account.total)*100}%` }}
                    />
                  </div>
                  <span>{account.current}/{account.total}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

