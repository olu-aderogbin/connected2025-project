import { DashboardLayout } from "@/components/layout/DashboardLayout";

const MentorDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mentor Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Active Mentees</h2>
            <p className="text-3xl font-bold text-primary">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
            <p className="text-3xl font-bold text-secondary">5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Hours Mentored</h2>
            <p className="text-3xl font-bold text-accent">48</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-600">Tomorrow at 2:00 PM</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium">Jane Smith</p>
                <p className="text-sm text-gray-600">Thursday at 11:00 AM</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium">Mike Johnson</p>
                <p className="text-sm text-gray-600">Friday at 3:30 PM</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="font-medium">Session completed with Sarah Wilson</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium">New mentee request from Tom Brown</p>
                <p className="text-sm text-gray-600">Yesterday</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium">Feedback received from Alex Lee</p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;