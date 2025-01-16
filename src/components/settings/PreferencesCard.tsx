import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PreferencesCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          <CardTitle>Preferences</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Language</p>
            <p className="text-sm text-gray-500">Select your preferred language</p>
          </div>
          <Select defaultValue="en">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Time Zone</p>
            <p className="text-sm text-gray-500">Set your local time zone</p>
          </div>
          <Select defaultValue="utc-5">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
              <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
              <SelectItem value="utc+0">UTC</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-gray-500">Toggle dark mode theme</p>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
};