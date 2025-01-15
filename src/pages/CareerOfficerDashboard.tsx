import { DashboardLayout } from "@/components/layout/DashboardLayout";

const CareerOfficerDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Career Officer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Student Overview</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Total Students: 250</p>
              <p className="text-gray-600">Active Job Seekers: 120</p>
              <p className="text-gray-600">Placed Students: 85</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">5 new student registrations</li>
              <li className="text-gray-600">10 pending resume reviews</li>
              <li className="text-gray-600">3 upcoming career workshops</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90">
                Schedule Workshop
              </button>
              <button className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary/90">
                Review Applications
              </button>
              <button className="w-full bg-accent text-white py-2 rounded hover:bg-accent/90">
                Send Announcements
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CareerOfficerDashboard;