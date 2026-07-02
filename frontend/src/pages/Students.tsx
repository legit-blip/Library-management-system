import DashboardLayout from "../components/layout/DashboardLayout";
import SearchBar from "../components/common/SearchBar";
import ActionButton from "../components/common/ActionButton";
import StatusBadge from "../components/common/StatusBadge";
import { Eye, Plus } from "lucide-react";
import { useState } from "react";

type StudentStatus =
  | "available"
  | "borrowed"
  | "reserved"
  | "returned"
  | "active"
  | "inactive";

interface Student {
  id: number;
  name: string;
  email: string;
  studentId: string;
  department: string;
  booksIssued: number;
  status: StudentStatus;
}

const studentData: Student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    studentId: "STU001",
    department: "Computer Science",
    booksIssued: 2,
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    studentId: "STU002",
    department: "Electronics",
    booksIssued: 1,
    status: "active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    studentId: "STU003",
    department: "Mechanical",
    booksIssued: 0,
    status: "active",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    studentId: "STU004",
    department: "Civil",
    booksIssued: 3,
    status: "active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    studentId: "STU005",
    department: "Computer Science",
    booksIssued: 1,
    status: "inactive",
  },
  {
    id: 6,
    name: "Emma Davis",
    email: "emma@example.com",
    studentId: "STU006",
    department: "Electronics",
    booksIssued: 2,
    status: "active",
  },
];

export default function Students() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Students</h1>
            <p className="mt-2 text-muted-foreground">
              Manage student accounts
            </p>
          </div>
          <ActionButton variant="primary">
            <Plus className="h-4 w-4" />
            Add Student
          </ActionButton>
        </div>

        {/* Search */}
        <SearchBar
          placeholder="Search by name, email or student ID..."
          onChange={setSearchTerm}
        />

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Total Students
            </p>
            <p className="mt-2 text-3xl font-bold text-foreground">567</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Active Today
            </p>
            <p className="mt-2 text-3xl font-bold text-primary">243</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              Books Issued
            </p>
            <p className="mt-2 text-3xl font-bold text-success">342</p>
          </div>
        </div>

        {/* Students Table */}
        <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              All Students ({filteredStudents.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Student ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Books Issued
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {student.studentId}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {student.department}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {student.booksIssued}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={student.status} />
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <Eye className="h-4 w-4" />
                        View
                      </button>
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
