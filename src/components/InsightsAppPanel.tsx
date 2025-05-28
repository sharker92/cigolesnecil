'use client';
import AdoptionChart from './AdoptionChart';
import InactiveTable from './InactiveTable';

export default function InsightsAppPanel() {
  return (
    <div className="w-full space-y-8">
      <div className="w-full pr-4">
        <AdoptionChart />
      </div>
      <InactiveTable />
    </div>
  );
}

