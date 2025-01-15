import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard! Here you can manage your activities, view notifications, and access your profile settings.</p>
        {/* Additional dashboard content can be added here */}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
