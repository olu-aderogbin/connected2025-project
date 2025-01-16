import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, LogOut } from "lucide-react";
import { ProfileSettingsCard } from "@/components/settings/ProfileSettingsCard";
import { NotificationsCard } from "@/components/settings/NotificationsCard";
import { PrivacySecurityCard } from "@/components/settings/PrivacySecurityCard";
import { PreferencesCard } from "@/components/settings/PreferencesCard";
import { BillingCard } from "@/components/settings/BillingCard";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <SettingsIcon className="h-8 w-8 text-primary" />
              Settings
            </h1>
            <p className="text-gray-600 mt-2">Manage your account preferences and settings</p>
          </div>
          <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid gap-6">
          <ProfileSettingsCard />
          <NotificationsCard />
          <PrivacySecurityCard />
          <PreferencesCard />
          <BillingCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;