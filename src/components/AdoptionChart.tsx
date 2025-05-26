"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const mockChartData = [
    { month: 'Jan', linked: 45, unlinked: 25 },
    { month: 'Feb', linked: 52, unlinked: 30 },
    { month: 'Mar', linked: 60, unlinked: 28 },
    { month: 'Apr', linked: 75, unlinked: 35 },
    { month: 'May', linked: 82, unlinked: 40 },
    { month: 'Jun', linked: 90, unlinked: 45 },
];

export default function AdoptionChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">App Adoption Overview</h3>
      <div className="h-64 w-full min-w-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={mockChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tick={{ fill: '#6B7280' }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280' }} 
            />
            <Tooltip 
              contentStyle={{
                background: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
            <Legend 
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingBottom: '20px' }}
            />
            <Line 
              type="monotone" 
              dataKey="linked" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={false}
              name="Linked Apps"
            />
            <Line 
              type="monotone" 
              dataKey="unlinked" 
              stroke="#94A3B8" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Unlinked Apps"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

