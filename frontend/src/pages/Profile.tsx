import DashboardLayout from "../components/layout/DashboardLayout";
import ActionButton from "../components/common/ActionButton";
import { Save } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    department: "Computer Science",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setPasswordData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your account settings
          </p>
        </div>

        {/* Profile Picture Section */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Profile Picture
          </h2>
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">JD</span>
            </div>
            <div>
              <button className="rounded-lg border border-primary bg-primary/10 px-4 py-2 font-medium text-primary hover:bg-primary/20 transition-colors">
                Upload Picture
              </button>
              <p className="mt-2 text-xs text-muted-foreground">
                JPG, PNG or GIF. Max 5MB.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-foreground">
            Personal Information
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(e, "firstName")}
                  className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(e, "lastName")}
                  className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
                className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange(e, "phone")}
                className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Department
              </label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) => handleInputChange(e, "department")}
                className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="mt-6">
            <ActionButton variant="primary">
              <Save className="h-4 w-4" />
              Save Changes
            </ActionButton>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
