import { DashboardLayout } from "@/components/layout/DashboardLayout";

const FreelancerDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Freelancer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Website Redesign</h3>
                <p className="text-sm text-gray-600">Due in 5 days</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Mobile App UI</h3>
                <p className="text-sm text-gray-600">Due in 12 days</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Earnings Overview</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>This Month</span>
                <span className="font-medium">$2,450</span>
              </div>
              <div className="flex justify-between">
                <span>Total Earnings</span>
                <span className="font-medium">$12,380</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="text-gray-600">New project invitation received</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-600">Payment received for Project X</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FreelancerDashboard;