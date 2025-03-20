import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", Commercial: 30, Residential: 20 },
  { name: "Feb", Commercial: 45, Residential: 25 },
  { name: "Mar", Commercial: 40, Residential: 35 },
  { name: "Apr", Commercial: 50, Residential: 30 },
  { name: "May", Commercial: 55, Residential: 40 },
  { name: "Jun", Commercial: 65, Residential: 45 },
  { name: "Jul", Commercial: 70, Residential: 50 },
  { name: "Aug", Commercial: 75, Residential: 55 },
  { name: "Sep", Commercial: 60, Residential: 50 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white w-full shadow-lg rounded-lg p-5">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Revenue Statistics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" tick={{ fill: "#555" }} />
          <YAxis tick={{ fill: "#555" }} />
          <Tooltip cursor={{ fill: "#f0f0f0" }} />
          <Legend verticalAlign="top" align="right" />
          <Bar dataKey="Commercial" fill="#FF8C00" barSize={35} radius={[10, 10, 0, 0]} />
          <Bar dataKey="Residential" fill="#00BFFF" barSize={35} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
