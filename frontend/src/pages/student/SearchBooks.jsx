import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import Card from "../../components/student-ui/Card";
import Button from "../../components/student-ui/Button";
import Badge from "../../components/student-ui/Badge";
import SearchBar from "../../components/student-ui/SearchBar";
import { bookCatalog, bookCategories } from "../../data/studentData";

const statusTone = {
  Available: "green",
  Borrowed: "blue",
  "Checked Out": "red",
};

function BookCard({ book }) {
  return (
    <Card padded={false} className="overflow-hidden flex flex-col">
      <div
        className={`h-32 w-full flex items-center justify-center ${book.cover}`}
      >
        <BookOpen className="h-10 w-10 text-slate-500/60" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Badge tone={statusTone[book.status] || "slate"} className="w-fit mb-3">
          {book.status}
        </Badge>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug">
          {book.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">{book.author}</p>
        <p className="text-xs text-slate-400 mt-2">{book.category}</p>
        <Button
          variant="outline"
          size="sm"
          fullWidth
          className="mt-4"
          disabled={book.status !== "Available"}
        >
          Request Borrow
        </Button>
      </div>
    </Card>
  );
}

export default function SearchBooks() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Search Books</h2>
        <p className="text-sm text-slate-500 mt-1">
          Browse the full library catalog. This is a preview — nothing here
          is wired up yet.
        </p>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <SearchBar
            placeholder="Search by title, author, or keyword..."
            className="flex-1"
          />
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700
              focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 md:w-56"
          >
            {bookCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {bookCatalog
          .filter(
            (book) =>
              activeCategory === "All Categories" ||
              book.category === activeCategory
          )
          .map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
}
