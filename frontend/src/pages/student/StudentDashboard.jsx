import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  Wallet,
  Layers,
  ArrowRight,
  Search,
  Clock,
  RotateCcw,
} from "lucide-react";
import Card from "../../components/student-ui/Card";
import Button from "../../components/student-ui/Button";
import Badge from "../../components/student-ui/Badge";
import {
  currentStudent,
  summaryStats,
  recentActivity,
  upcomingReturns,
  recentlyReturned,
} from "../../data/studentData";

function SummaryCard({ icon: Icon, label, value, tone, hint }) {
  const tones = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    slate: "bg-slate-100 text-slate-600",
  };
  return (
    <Card className="min-w-0">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${tones[tone]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
      {hint && <p className="mt-2 text-xs text-slate-400">{hint}</p>}
    </Card>
  );
}

const activityTone = {
  Borrowed: "blue",
  Returned: "green",
  Renewed: "amber",
};

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Welcome back, {currentStudent.name.split(" ")[0]}
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Here's what's happening with your library account today.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        <SummaryCard
          icon={BookOpen}
          label="Books Currently Borrowed"
          value={summaryStats.currentlyBorrowed}
          tone="blue"
          hint="Across all active loans"
        />
        <SummaryCard
          icon={CheckCircle2}
          label="Books Returned"
          value={summaryStats.booksReturned}
          tone="green"
          hint="All-time total"
        />
        <SummaryCard
          icon={Wallet}
          label="Outstanding Fine"
          value={`रु${summaryStats.outstandingFine.toFixed(2)}`}
          tone="amber"
          hint="Balance due"
        />
        <SummaryCard
          icon={Layers}
          label="Borrow Limit Remaining"
          value={`${summaryStats.borrowLimitRemaining} of ${summaryStats.borrowLimitTotal}`}
          tone="slate"
          hint="Books you can still borrow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Borrow Activity */}
        <Card
          title="Recent Borrow Activity"
          subtitle="Your latest loan events"
          className="lg:col-span-2"
        >
          <ul className="divide-y divide-slate-100 -mx-6 -mb-6">
            {recentActivity.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between px-6 py-3.5"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {item.book}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
                </div>
                <Badge tone={activityTone[item.action] || "slate"}>
                  {item.action}
                </Badge>
              </li>
            ))}
          </ul>
        </Card>

        {/* Quick Search */}
        <Card
          title="Find your next read"
          subtitle="Search the full catalog"
          icon={<Search className="h-5 w-5" />}
        >
          <p className="text-sm text-slate-500">
            Browse available titles by category, author, or keyword and request
            a borrow in a few taps.
          </p>
          <Button
            className="mt-4"
            fullWidth
            icon={<ArrowRight />}
            iconPosition="right"
            onClick={() => navigate("/student/search-books")}
          >
            Quick Search Books
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Upcoming Return Dates */}
        <Card
          title="Upcoming Return Dates"
          subtitle="Plan ahead to avoid fines"
          icon={<Clock className="h-5 w-5" />}
        >
          <ul className="space-y-3">
            {upcomingReturns.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {item.book}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Due {item.dueDate}
                  </p>
                </div>
                <Badge tone={item.daysLeft <= 2 ? "amber" : "blue"}>
                  {item.daysLeft} {item.daysLeft === 1 ? "day" : "days"} left
                </Badge>
              </li>
            ))}
          </ul>
        </Card>

        {/* Recently Returned Books */}
        <Card
          title="Recently Returned Books"
          subtitle="Your most recent returns"
          icon={<RotateCcw className="h-5 w-5" />}
        >
          <ul className="space-y-3">
            {recentlyReturned.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {item.book}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Returned {item.returnedOn}
                  </p>
                </div>
                <Badge tone="green">Returned</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
