"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
} from "recharts";

const mockChartData = [
  { month: "Jan", linked: 1, unlinked: 4 },
  { month: "Feb", linked: 4, unlinked: 3 },
  { month: "Mar", linked: 3, unlinked: 10 },
  { month: "Apr", linked: 7, unlinked: 3 },
  { month: "May", linked: 3, unlinked: 10 },
  { month: "Jun", linked: 5, unlinked: 4 },
  { month: "Jul", linked: 12, unlinked: 6 },
];

const timeframeLabels = {
  "3M": { label: "3 months", months: 3 },
  "6M": { label: "6 months", months: 6 },
  "1Y": { label: "1 year", months: 12 },
};

export default function AdoptionChart() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<
    "3M" | "6M" | "1Y"
  >("1Y");
  const currentData = mockChartData.slice(
    -timeframeLabels[selectedTimeFrame].months,
  );
  const previousData = mockChartData.slice(
    -timeframeLabels[selectedTimeFrame].months * 2,
    -timeframeLabels[selectedTimeFrame].months,
  );

  const currentTotal = currentData.reduce(
    (acc, curr) => acc + curr.linked + curr.unlinked,
    0,
  );
  const previousTotal = previousData.reduce(
    (acc, curr) => acc + curr.linked + curr.unlinked,
    0,
  );
  const percentageChange =
    ((currentTotal - previousTotal) / previousTotal) * 100;

  return (
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between items-start md:items-center mb-4">
        <h3 className="text-lg font-semibold">App Adoption Overview</h3>
        <div className="flex gap-2 w-full md:w-auto">
          {(["3M", "6M", "1Y"] as const).map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeFrame(timeframe)}
                            className={`flex-1 md:flex-none px-3 py-1 rounded-lg text-sm ${
                selectedTimeFrame === timeframe
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={currentData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tick={{ fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280" }}
              domain={[0, 'auto']}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingBottom: "20px" }}
            />
            <Area
              type="linear"
              dataKey="unlinked"
              fill="#E2E8F0"
              stroke="none"
              fillOpacity={1}
              activeDot={false}
              connectNulls={true}
              isAnimationActive={false}
            />
            <Line
              type="linear"
              dataKey="linked"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{
                fill: "white",
                stroke: "#3B82F6",
                strokeWidth: 2,
                r: 5,
              }}
              name="Linked Apps"
            />
            <Line
              type="linear"
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

      <div className="flex justify-between items-center mt-3">
        <p className="text-sm text-gray-600">
          {currentTotal.toLocaleString()} new apps added
        </p>
        <div
          className={`flex items-center gap-1 ${
            percentageChange >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          <span className="text-sm font-medium">
            {percentageChange >= 0 ? "+" : ""}
            {percentageChange.toFixed(1)}%
          </span>
          {percentageChange >= 0 ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 13l5-5 5 5h-3v4H8v-4H5z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M15 7l-5 5-5-5h3V3h4v4h3z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

