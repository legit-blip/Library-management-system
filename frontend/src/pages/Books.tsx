import DashboardLayout from "../components/layout/DashboardLayout";
import SearchBar from "../components/common/SearchBar";
import ActionButton from "../components/common/ActionButton";
import StatusBadge from "../components/common/StatusBadge";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";

type BookStatus =
  | "available"
  | "borrowed"
  | "reserved"
  | "returned"
  | "active"
  | "inactive";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  isbn: string;
  status: BookStatus;
}

const bookData: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    isbn: "978-0-7432-7356-5",
    status: "available",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    isbn: "978-0-06-112008-4",
    status: "borrowed",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
    isbn: "978-0-45-152494-2",
    status: "available",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    isbn: "978-0-14-143951-8",
    status: "borrowed",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    category: "Fiction",
    isbn: "978-0-316-76948-0",
    status: "available",
  },
  {
    id: 6,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Science Fiction",
    isbn: "978-0-06-085052-4",
    status: "borrowed",
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    isbn: "978-0-54-792221-1",
    status: "available",
  },
  {
    id: 8,
    title: "Dune",
    author: "Frank Herbert",
    category: "Science Fiction",
    isbn: "978-0-441-17271-9",
    status: "available",
  },
];



export default function Books() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = bookData.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Books</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your library books
            </p>
          </div>
          <ActionButton variant="primary">
            <Plus className="h-4 w-4" />
            Add New Book
          </ActionButton>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4">
          <SearchBar
            placeholder="Search by title or author..."
            onChange={setSearchTerm}
          />
        </div>

        {/* Books Table */}
        <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
              {selectedCategory === "All" ? "All Books" : selectedCategory} (
              {filteredBooks.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
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
                      {book.category}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={book.status} />
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          <Edit2 className="h-4 w-4" />
                          Edit
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredBooks.length} results
          </p>
          <div className="flex gap-2">
            <button className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              Previous
            </button>
            <button className="rounded-lg border border-primary bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              1
            </button>
            <button className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              2
            </button>
            <button className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
