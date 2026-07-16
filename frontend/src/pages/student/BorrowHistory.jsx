import React from "react";
import Card from "../../components/student-ui/Card";
import Badge from "../../components/student-ui/Badge";
import SearchBar from "../../components/student-ui/SearchBar";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../components/student-ui/Table";
import { borrowHistory } from "../../data/studentData";

const statusTone = {
  Returned: "green",
  "Returned Late": "amber",
};

export default function BorrowHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Borrow History</h2>
        <p className="text-sm text-slate-500 mt-1">
          A full record of books you've previously borrowed.
        </p>
      </div>

      <Card>
        {/* Search UI only — not wired up to any filtering logic */}
        <SearchBar placeholder="Search borrow history..." />
      </Card>

      <Card padded={false}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book Title</TableHead>
              <TableHead>Borrow Date</TableHead>
              <TableHead>Return Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Fine Paid</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrowHistory.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium text-slate-800">
                  {record.title}
                </TableCell>
                <TableCell>{record.borrowDate}</TableCell>
                <TableCell>{record.returnDate}</TableCell>
                <TableCell>
                  <Badge tone={statusTone[record.status] || "slate"}>
                    {record.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {record.finePaid > 0 ? (
                    `रु${record.finePaid.toFixed(2)}`
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
