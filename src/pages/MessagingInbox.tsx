import { DashboardLayout } from "@/components/layout/DashboardLayout";

const MessagingInbox = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">Last message preview...</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">2m ago</span>
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-sm text-gray-500">Last message preview...</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">1h ago</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
            <div className="h-[600px] flex flex-col">
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold">Chat with John Doe</h2>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-lg p-3 max-w-[70%]">
                    <p>Hello! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                    <p>Hi! I had a question about the project timeline.</p>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagingInbox;