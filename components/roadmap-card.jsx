import { roadmapPhases } from "./roadmapPhases";
import {
  getStatusColor,
  getStatusText,
  getTaskStatusColor,
  getCategoryIcon,
  getCategoryName,
} from "../lib/utils";

const SimpleRoadmapCard = () => {
  return (
    <div className="mt-4 space-y-4">
      {/* Roadmap Timeline */}
      {roadmapPhases.map((phase, index) => {
        return (
          <div key={index}>
            {/* Phase content */}
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 md:p-6 hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-600">
                {/* Phase header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {phase.phase}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          phase.status
                        )}`}
                      >
                        {getStatusText(phase.status)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Tasks Grid */}
                <div className="space-y-4">
                  {/* Group tasks by category */}
                  {[...new Set(phase.tasks.map((task) => task.category))].map(
                    (category) => {
                      const categoryTasks = phase.tasks.filter(
                        (task) => task.category === category
                      );
                      return (
                        <div
                          key={category}
                          className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-100 dark:border-gray-600"
                        >
                          <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                            <span className="mr-2">
                              {getCategoryIcon(category)}
                            </span>
                            {getCategoryName(category)}
                            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                              (
                              {
                                categoryTasks.filter(
                                  (t) => t.status === "completed"
                                ).length
                              }
                              /{categoryTasks.length})
                            </span>
                          </h4>
                          <div className="grid gap-2">
                            {categoryTasks.map((task, taskIndex) => (
                              <div
                                key={taskIndex}
                                className={`px-3 py-2 rounded-lg border text-sm font-medium ${getTaskStatusColor(
                                  task.status
                                )}`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{task.name}</span>
                                  <span className="text-xs capitalize">
                                    {task.status.replace("-", " ")}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Deliverables */}
                <div className="mt-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-100 dark:border-indigo-800">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
                    Expected Deliverables
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {phase.deliverables}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleRoadmapCard;
