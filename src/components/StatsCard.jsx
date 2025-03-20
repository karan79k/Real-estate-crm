const StatsCard = ({ title, value, completed, total, color }) => {
  
  const progress = total > 0 ? (completed / total) * 100 : 0;

  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    cyan: "bg-cyan-500",
  };

  // default color
  const progressColor = colorClasses[color] || "bg-gray-500";

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-gray-300 dark:border-gray-600">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {completed} / {total} Completed
      </p>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
        <div
          className={`h-2 rounded-full ${progressColor}`}
          style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
        ></div>
      </div>
    </div>
  );
};

export default StatsCard;
