import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", bookings: 40 },
  { month: "Feb", bookings: 55 },
  { month: "Mar", bookings: 35 },
  { month: "Apr", bookings: 80 },
  { month: "May", bookings: 65 },
];

const BookingChart = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg h-full">
      <h3 className="text-lg font-semibold mb-4">Booking Trends</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="bookings" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingChart;
