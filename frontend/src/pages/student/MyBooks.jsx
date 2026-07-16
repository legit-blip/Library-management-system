import React from "react";
import Card from "../../components/student-ui/Card";
import Badge from "../../components/student-ui/Badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../components/student-ui/Table";
import { myBorrowedBooks } from "../../data/studentData";

const statusTone = {
  "On Time": "green",
  "Due Soon": "amber",
  Overdue: "red",
};

export default function MyBooks() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          My Borrowed Books
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Books currently checked out to your account.
        </p>
      </div>

      <Card padded={false}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book Title</TableHead>
              <TableHead>Borrow Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Days Remaining</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Fine Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myBorrowedBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium text-slate-800">
                  {book.title}
                </TableCell>
                <TableCell>{book.borrowDate}</TableCell>
                <TableCell>{book.dueDate}</TableCell>
                <TableCell>
                  {book.daysRemaining >= 0
                    ? `${book.daysRemaining} days`
                    : `${Math.abs(book.daysRemaining)} days overdue`}
                </TableCell>
                <TableCell>
                  <Badge tone={statusTone[book.status] || "slate"}>
                    {book.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {book.fine > 0 ? (
                    <span className="font-medium text-red-600">
                      ${book.fine.toFixed(2)}
                    </span>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
