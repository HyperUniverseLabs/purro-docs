import React from "react";

export const ProjectCard = ({ title, status, category, type, tags = [] }) => {
  const statusConfig = {
    Ongoing: {
      color: "rgb(245, 158, 11)", // amber-500
      bgColor: "rgb(254, 243, 199)", // amber-100
      darkBgColor: "rgb(69, 26, 3)", // amber-900/20
    },
    Completed: {
      color: "rgb(34, 197, 94)", // green-500
      bgColor: "rgb(220, 252, 231)", // green-100
      darkBgColor: "rgb(20, 83, 45)", // green-900/20
    },
    Planning: {
      color: "rgb(59, 130, 246)", // blue-500
      bgColor: "rgb(219, 234, 254)", // blue-100
      darkBgColor: "rgb(30, 58, 138)", // blue-900/20
    },
  };

  const config = statusConfig[status] || statusConfig["Planning"];

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-sm transition-shadow bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: config.color }}
          />
          <span
            className="text-xs font-medium px-2 py-1 rounded-full"
            style={{
              color: config.color,
              backgroundColor: config.bgColor,
            }}
          >
            {status}
          </span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          {type}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>

      <div className="text-xs text-gray-500 dark:text-gray-400">
        #{category}
      </div>
    </div>
  );
};
