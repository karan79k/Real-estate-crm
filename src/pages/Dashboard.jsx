// src/pages/Dashboard.jsx
import StatsCard from "../components/StatsCard";
import BookingChart from "../components/BookingChart";
import RevenueChart from "../components/RevenueChart";
import ProjectSalesTable from "../components/ProjectSalesTable";
import InquiryTable from "../components/InquiryTable";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard title="On Going" value={425} completed={155} total={425} color="blue" />
      <StatsCard title="Completed" value={185} completed={185} total={185} color="green" />
      <StatsCard title="Commercial" value={252} completed={176} total={252} color="orange" />
      <StatsCard title="Residential" value={489} completed={165} total={489} color="cyan" />

      <div className="col-span-3">
        <InquiryTable />
      </div>
      <div className="col-span-1">
        <RevenueChart />
      </div>
      <div className="col-span-1">
        <BookingChart />
      </div>
      
      <div className="col-span-3">
        <ProjectSalesTable />
      </div>
     
      
    </div>
  );
};

export default Dashboard;
