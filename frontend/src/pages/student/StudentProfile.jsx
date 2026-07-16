import React from "react";
import {
  Mail,
  Phone,
  GraduationCap,
  Layers,
  BookOpen,
  Wallet,
  Pencil,
} from "lucide-react";
import Card from "../../components/student-ui/Card";
import Button from "../../components/student-ui/Button";
import Badge from "../../components/student-ui/Badge";
import { currentStudent } from "../../data/studentData";

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm font-medium text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default function StudentProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Profile</h2>
        <p className="text-sm text-slate-500 mt-1">
          Your account details as they appear to the library.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Profile summary */}
        <Card className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold text-white">
              {currentStudent.avatarInitials}
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900">
              {currentStudent.name}
            </h3>
            <p className="text-sm text-slate-500">{currentStudent.studentId}</p>
            <Badge tone="green" className="mt-3">
              {currentStudent.membershipStatus} Member
            </Badge>

            <Button
              variant="outline"
              size="sm"
              icon={<Pencil />}
              className="mt-6 w-full"
            >
              Edit Profile
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-900">
                {currentStudent.booksBorrowed}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Books Borrowed</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-900">
                ${currentStudent.outstandingBalance.toFixed(2)}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Outstanding</p>
            </div>
          </div>
        </Card>

        {/* Details */}
        <Card
          title="Personal & Academic Information"
          subtitle="Managed by the library administration"
          className="lg:col-span-2"
        >
          <div className="divide-y divide-slate-100">
            <DetailRow
              icon={GraduationCap}
              label="Department"
              value={currentStudent.department}
            />
            <DetailRow
              icon={Layers}
              label="Semester"
              value={currentStudent.semester}
            />
            <DetailRow icon={Mail} label="Email" value={currentStudent.email} />
            <DetailRow icon={Phone} label="Phone Number" value={currentStudent.phone} />
            <DetailRow
              icon={BookOpen}
              label="Books Borrowed"
              value={`${currentStudent.booksBorrowed} active loans`}
            />
            <DetailRow
              icon={Wallet}
              label="Outstanding Balance"
              value={`$${currentStudent.outstandingBalance.toFixed(2)}`}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
