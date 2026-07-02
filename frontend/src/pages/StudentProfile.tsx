import DashboardLayout from "../components/layout/DashboardLayout";
import StatusBadge from "../components/common/StatusBadge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type Status =
  | "available"
  | "borrowed"
  | "reserved"
  | "returned"
  | "active"
  | "inactive";

interface StudentDetails {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  department: string;
  semester: string;
  joinDate: string;
  status: Status;
  booksIssued: number;
  fineAmount: number;
}

interface BorrowedBook {
  id: number;
  title: string;
  author: string;
  issueDate: string;
  dueDate: string;
  status: Status;
}

interface BorrowHistory {
  id: number;
  book: string;
  author: string;
  borrowDate: string;
  returnDate: string;
}

const studentDetails: StudentDetails = {
  name: "John Doe",
  studentId: "STU001",
  email: "john@example.com",
  phone: "+1 234 567 8900",
  department: "Computer Science",
  semester: "4th",
  joinDate: "2022-08-15",
  status: "active",
  booksIssued: 2,
  fineAmount: 0,
};

const borrowedBooks: BorrowedBook[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    issueDate: "2024-01-15",
    dueDate: "2024-01-29",
    status: "borrowed",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    issueDate: "2024-01-16",
    dueDate: "2024-01-30",
    status: "borrowed",
  },
];

const borrowHistory: BorrowHistory[] = [
  {
    id: 1,
    book: "1984",
    author: "George Orwell",
    borrowDate: "2024-01-10",
    returnDate: "2024-01-24",
  },
  {
    id: 2,
    book: "Pride and Prejudice",
    author: "Jane Austen",
    borrowDate: "2023-12-20",
    returnDate: "2024-01-03",
  },
  {
    id: 3,
    book: "The Catcher in the Rye",
    author: "J. D. Salinger",
    borrowDate: "2023-12-01",
    returnDate: "2023-12-15",
  },
];

export default function StudentProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link
            to="/students"
            className="rounded-lg border border-border p-2 hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {studentDetails.name}
            </h1>
            <p className="mt-2 text-muted-foreground">
              Student ID: {studentDetails.studentId}
            </p>
          </div>
        </div>

        {/* Student Info Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Department
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">
              {studentDetails.department}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Semester
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">
              {studentDetails.semester}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Books Issued
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">
              {studentDetails.booksIssued}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">Fine</p>
            <p
              className={`mt-2 text-lg font-semibold ${
                studentDetails.fineAmount > 0
                  ? "text-destructive"
                  : "text-success"
              }`}
            >
              ₹{studentDetails.fineAmount}
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-foreground">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="mt-2 text-foreground">{studentDetails.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone</p>
              <p className="mt-2 text-foreground">{studentDetails.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Member Since
              </p>
              <p className="mt-2 text-foreground">
                {new Date(studentDetails.joinDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Status
              </p>
              <p className="mt-2">
                <StatusBadge status={studentDetails.status} />
              </p>
            </div>
          </div>
        </div>

        {/* Currently Borrowed Books */}
        <div className="rounded-lg border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              Currently Borrowed Books ({borrowedBooks.length})
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
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Issue Date
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
                {borrowedBooks.map((book) => (
                  <tr
                    key={book.id}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {book.author}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {book.issueDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {book.dueDate}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={book.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Borrow History */}
        <div className="rounded-lg border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              Borrow History
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
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Borrowed On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Returned On
                  </th>
                </tr>
              </thead>
              <tbody>
                {borrowHistory.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {item.book}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {item.author}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {item.borrowDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {item.returnDate}
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
