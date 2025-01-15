import { DashboardLayout } from "@/components/layout/DashboardLayout";

const EmployerDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Employer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Active Job Posts</h2>
            <p className="text-3xl font-bold text-primary">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Total Applications</h2>
            <p className="text-3xl font-bold text-secondary">48</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Hired Candidates</h2>
            <p className="text-3xl font-bold text-accent">8</p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
            <div className="space-y-4">
              {/* Placeholder for recent applications list */}
              <p className="text-gray-600">No recent applications to display</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
            <div className="space-y-4">
              {/* Placeholder for upcoming interviews list */}
              <p className="text-gray-600">No upcoming interviews scheduled</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors">
              Post New Job
            </button>
            <button className="p-4 bg-secondary/10 rounded-lg text-secondary hover:bg-secondary/20 transition-colors">
              View Applications
            </button>
            <button className="p-4 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-colors">
              Schedule Interview
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployerDashboard;