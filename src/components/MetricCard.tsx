"use client";
import { ReactNode } from "react";

type MetricCardProps = {
  title: string;
  value: string;
  icon?: ReactNode;
};

export default function MetricCard({ title, value, icon }: MetricCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
      {icon && (
        <div className="absolute top-4 right-4">
          {icon}
        </div>
      )}
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h3>
      <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
        {value}
      </p>
    </div>
  );
}

