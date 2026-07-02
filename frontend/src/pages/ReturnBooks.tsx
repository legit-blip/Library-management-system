import DashboardLayout from "../components/layout/DashboardLayout";
import SearchBar from "../components/common/SearchBar";
import ActionButton from "../components/common/ActionButton";
import StatusBadge from "../components/common/StatusBadge";
import { RotateCcw } from "lucide-react";

const borrowedBooks = [
  {
    id: 1,
    student: "John Doe",
    book: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    borrowDate: "2024-01-15",
    dueDate: "2024-01-29",
    days: 14,
    fine: 0,
  },
  {
    id: 2,
    student: "Jane Smith",
    book: "To Kill a Mockingbird",
    author: "Harper Lee",
    borrowDate: "2024-01-10",
    dueDate: "2024-01-24",
    days: 14,
    fine: 50,
  },
  {
    id: 3,
    student: "Bob Johnson",
    book: "1984",
    author: "George Orwell",
    borrowDate: "2024-01-05",
    dueDate: "2024-01-19",
    days: 14,
    fine: 150,
  },
  {
    id: 4,
    student: "Alice Brown",
    book: "Pride and Prejudice",
    author: "Jane Austen",
    borrowDate: "2024-01-16",
    dueDate: "2024-01-30",
    days: 14,
    fine: 0,
  },
  {
    id: 5,
    student: "Charlie Wilson",
    book: "The Catcher in the Rye",
    author: "J. D. Salinger",
    borrowDate: "2024-01-08",
    dueDate: "2024-01-22",
    days: 14,
    fine: 100,
  },
];

export default function ReturnBook() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Return Book</h1>
          <p className="mt-2 text-muted-foreground">
            Process book returns and manage fines
          </p>
        </div>

        {/* Search */}
        <SearchBar placeholder="Search by student name or book title..." />

        {/* Returned Books Table */}
        <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              Active Borrowings ({borrowedBooks.length})
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
                    Borrowed
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Due
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Fine
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {borrowedBooks.map((book) => (
                  <tr
                    key={book.id}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {book.student}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">
                          {book.book}
                        </p>
                        <p className="text-xs">{book.author}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {book.borrowDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {book.dueDate}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold">
                      <span
                        className={
                          book.fine > 0 ? "text-destructive" : "text-success"
                        }
                      >
                        {book.fine > 0 ? `₹${book.fine}` : "No fine"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <RotateCcw className="h-4 w-4" />
                        Return
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fine Statistics */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Total Outstanding Fines
            </p>
            <p className="mt-2 text-3xl font-bold text-foreground">₹300</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Books Overdue
            </p>
            <p className="mt-2 text-3xl font-bold text-destructive">3</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Books Due Today
            </p>
            <p className="mt-2 text-3xl font-bold text-warning">2</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
