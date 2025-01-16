import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CreditCard, Calendar } from "lucide-react";

const BillingHistory = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-03-15",
      amount: 299.99,
      description: "Premium Plan - Monthly",
      status: "paid",
      invoice: "#INV-001",
    },
    {
      id: 2,
      date: "2024-02-15",
      amount: 299.99,
      description: "Premium Plan - Monthly",
      status: "paid",
      invoice: "#INV-002",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Billing History</h1>
          <Button>
            <CreditCard className="mr-2 h-4 w-4" />
            Manage Subscription
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Premium</p>
              <p className="text-sm text-gray-500">$299.99/month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next Billing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Apr 15, 2024</p>
              <p className="text-sm text-gray-500">Auto-renewal</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">•••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-gray-500">of monthly limit</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between py-4 border-b last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">${transaction.amount}</p>
                      <p className="text-sm text-gray-500">{transaction.invoice}</p>
                    </div>
                    <Badge
                      variant={transaction.status === "paid" ? "secondary" : "destructive"}
                    >
                      {transaction.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BillingHistory;