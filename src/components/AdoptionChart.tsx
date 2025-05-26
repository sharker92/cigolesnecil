"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function AdoptionChart() {
  const adoptionData = [
    { month: 'Jan', linked: 65, unlinked: 35 },
    // ... mock data from utils/data.js
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow mt-6 ml-64">
      <h3 className="text-lg font-semibold mb-4">App Adoption Overview</h3>
      <div className="h-80">
        <BarChart data={adoptionData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="linked" fill="#3B82F6" />
          <Bar dataKey="unlinked" fill="#94A3B8" />
        </BarChart>
      </div>
    </div>
  );
}

