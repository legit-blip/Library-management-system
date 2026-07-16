import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/common/StatCard";
import ActionButton from "../components/common/ActionButton";
import StatusBadge from "../components/common/StatusBadge";
import { BookOpen, ArrowRight, Plus, Activity, Users } from "lucide-react";

type BorrowStatus =
  | "available"
  | "borrowed"
  | "reserved"
  | "returned"
  | "active"
  | "inactive";

interface RecentBorrow {
  id: number;
  bookTitle: string;
  author: string;
  student: string;
  borrowDate: string;
  dueDate: string;
  status: BorrowStatus;
}

const recentBorrows: RecentBorrow[] = [
  {
    id: 1,
    bookTitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    student: "John Doe",
    borrowDate: "2024-01-15",
    dueDate: "2024-01-29",
    status: "borrowed",
  },
  {
    id: 2,
    bookTitle: "To Kill a Mockingbird",
    author: "Harper Lee",
    student: "Jane Smith",
    borrowDate: "2024-01-14",
    dueDate: "2024-01-28",
    status: "borrowed",
  },
  {
    id: 3,
    bookTitle: "1984",
    author: "George Orwell",
    student: "Bob Johnson",
    borrowDate: "2024-01-10",
    dueDate: "2024-01-24",
    status: "returned",
  },
  {
    id: 4,
    bookTitle: "Pride and Prejudice",
    author: "Jane Austen",
    student: "Alice Brown",
    borrowDate: "2024-01-16",
    dueDate: "2024-01-30",
    status: "borrowed",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Welcome back! Here's an overview of your library.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Books"
            value="1,245"
            icon={<BookOpen className="h-6 w-6" />}
            color="primary"
          />
          <StatCard
            title="Books Borrowed"
            value="342"
            icon={<ArrowRight className="h-6 w-6" />}
            color="warning"
          />
          <StatCard
            title="Available Books"
            value="903"
            icon={<Plus className="h-6 w-6" />}
            color="success"
          />
          <StatCard
            title="Registered Students"
            value="567"
            icon={<Users className="h-6 w-6" />}
            color="primary"
          />
        </div>

        {/* Quick Actions */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <ActionButton variant="primary">
              <Plus className="h-4 w-4" />
              Add New Book
            </ActionButton>
            <ActionButton variant="primary">
              <ArrowRight className="h-4 w-4" />
              Issue Book
            </ActionButton>
            <ActionButton variant="secondary">
              <RotateCcw className="h-4 w-4" />
              Record Return
            </ActionButton>
            <ActionButton variant="secondary">
              <Users className="h-4 w-4" />
              Add Student
            </ActionButton>
          </div>
        </div>

        {/* Recent Borrows Table */}
        <div className="rounded-lg border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              Recent Borrowed Books
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Book Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Borrow Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentBorrows.map((borrow) => (
                  <tr
                    key={borrow.id}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-foreground">
                      {borrow.bookTitle}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {borrow.student}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {borrow.borrowDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {borrow.dueDate}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={borrow.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function RotateCcw(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" />
    </svg>
  );
}
