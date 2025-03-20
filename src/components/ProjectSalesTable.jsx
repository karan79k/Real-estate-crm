import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 400, color: "#10B981" },
  { name: "In Progress", value: 300, color: "#F59E0B" },
  { name: "Pending", value: 200, color: "#EF4444" },
];

const ProjectSalesTable = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6">
      {/* Left Side - Table */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4">Project Sales Overview</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Skyline Tower</td>
                <td className="p-3">John Doe</td>
                <td className="p-3"><span className="px-2 py-1 bg-green-200 text-green-800 rounded">Completed</span></td>
                <td className="p-3">$1,200,000</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Urban Residences</td>
                <td className="p-3">Jane Smith</td>
                <td className="p-3"><span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded">In Progress</span></td>
                <td className="p-3">$850,000</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3">Sunset Villas</td>
                <td className="p-3">Mark Lee</td>
                <td className="p-3"><span className="px-2 py-1 bg-red-200 text-red-800 rounded">Pending</span></td>
                <td className="p-3">$500,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Side - Pie Chart */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectSalesTable;
