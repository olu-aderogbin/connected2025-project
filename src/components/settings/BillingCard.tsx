import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export const BillingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          <CardTitle>Billing & Subscription</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Current Plan</p>
            <p className="text-sm text-gray-500">Student Pro Plan</p>
          </div>
          <Badge variant="secondary">Active</Badge>
        </div>
        <Button variant="outline">Manage Subscription</Button>
      </CardContent>
    </Card>
  );
};