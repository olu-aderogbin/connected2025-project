import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow">
            <p className="font-semibold">New Message from John Doe</p>
            <p className="text-gray-600">You have received a new message regarding your application.</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow">
            <p className="font-semibold">Application Status Update</p>
            <p className="text-gray-600">Your application for the Software Engineer position has been reviewed.</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow">
            <p className="font-semibold">Reminder: Upcoming Interview</p>
            <p className="text-gray-600">You have an interview scheduled for next week. Please check your calendar.</p>
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
