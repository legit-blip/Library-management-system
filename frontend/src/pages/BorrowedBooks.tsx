import DashboardLayout from "../components/layout/DashboardLayout";
import ActionButton from "../components/common/ActionButton";
import StatusBadge from "../components/common/StatusBadge";
import { Plus } from "lucide-react";

type BorrowStatus =
  | "available"
  | "borrowed"
  | "reserved"
  | "returned"
  | "active"
  | "inactive";

interface Borrow {
  id: number;
  student: string;
  book: string;
  issueDate: string;
  returnDate: string;
  status: BorrowStatus;
}

const recentBorrows: Borrow[] = [
  {
    id: 1,
    student: "John Doe",
    book: "The Great Gatsby",
    issueDate: "2024-01-15",
    returnDate: "2024-01-29",
    status: "borrowed",
  },
  {
    id: 2,
    student: "Jane Smith",
    book: "To Kill a Mockingbird",
    issueDate: "2024-01-14",
    returnDate: "2024-01-28",
    status: "borrowed",
  },
  {
    id: 3,
    student: "Bob Johnson",
    book: "1984",
    issueDate: "2024-01-10",
    returnDate: "2024-01-24",
    status: "returned",
  },
  {
    id: 4,
    student: "Alice Brown",
    book: "Pride and Prejudice",
    issueDate: "2024-01-16",
    returnDate: "2024-01-30",
    status: "borrowed",
  },
];

export default function BorrowBook() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Issue Book</h1>
          <p className="mt-2 text-muted-foreground">Record a new book borrowing</p>
        </div>

        {/* Form Section */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-foreground">
            Borrow Book Form
          </h2>

          <div className="space-y-6">
            {/* Student Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Search Student
              </label>
              <input
                type="text"
                placeholder="Enter student name or ID..."
                className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <div className="mt-2 space-y-2">
                <div className="rounded-lg border border-border p-3 cursor-pointer hover:bg-secondary transition-colors">
                  <p className="text-sm font-medium text-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">ID: STU001</p>
                </div>
                <div className="rounded-lg border border-border p-3 cursor-pointer hover:bg-secondary transition-colors">
                  <p className="text-sm font-medium text-foreground">Jane Smith</p>
                  <p className="text-xs text-muted-foreground">ID: STU002</p>
                </div>
              </div>
            </div>

            {/* Book Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Search Book
              </label>
              <input
                type="text"
                placeholder="Enter book title or ISBN..."
                className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <div className="mt-2 space-y-2">
                <div className="rounded-lg border border-border p-3 cursor-pointer hover:bg-secondary transition-colors">
                  <p className="text-sm font-medium text-foreground">
                    The Great Gatsby
                  </p>
                  <p className="text-xs text-muted-foreground">
                    F. Scott Fitzgerald
                  </p>
                </div>
                <div className="rounded-lg border border-border p-3 cursor-pointer hover:bg-secondary transition-colors">
                  <p className="text-sm font-medium text-foreground">
                    To Kill a Mockingbird
                  </p>
                  <p className="text-xs text-muted-foreground">Harper Lee</p>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Issue Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Notes (Optional)
              </label>
              <textarea
                placeholder="Add any notes about this borrowing..."
                className="w-full rounded-lg border border-border bg-background py-2.5 px-4 text-sm placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                rows={3}
              ></textarea>
            </div>

            {/* Submit Button */}
            <ActionButton variant="primary" size="lg">
              <Plus className="h-4 w-4" />
              Issue Book
            </ActionButton>
          </div>
        </div>

        {/* Recent Borrows */}
        <div className="rounded-lg border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              Recent Borrowings
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Book
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Issue Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Return Date
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
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {borrow.student}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {borrow.book}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {borrow.issueDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {borrow.returnDate}
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
