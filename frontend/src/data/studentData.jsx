// Static placeholder data for the Student Portal.
// No API calls, no backend — everything here is hard-coded fixture data
// used purely to make the UI feel real.

export const currentStudent = {
  name: "Ram lal",
  studentId: "STU-2024-0847",
  department: "BCA",
  semester: "4th Semester",
  email: "ram.lal@gmail.com",
  phone: "9999999909",
  membershipStatus: "Active",
  booksBorrowed: 3,
  outstandingBalance: 4.5,
  avatarInitials: "RL",
};

export const summaryStats = {
  currentlyBorrowed: 3,
  booksReturned: 27,
  outstandingFine: 4.5,
  borrowLimitRemaining: 2,
  borrowLimitTotal: 5,
};

export const recentActivity = [
  {
    id: 1,
    book: "Software Enginering",
    action: "Borrowed",
    date: "Jun 24, 2026",
  },
  {
    id: 2,
    book: "Numerical methods",
    action: "Returned",
    date: "Jun 20, 2026",
  },
  {
    id: 3,
    book: "DBMS",
    action: "Borrowed",
    date: "Jun 15, 2026",
  },
  {
    id: 4,
    book: "Operating system",
    action: "Renewed",
    date: "Jun 10, 2026",
  },
];

export const upcomingReturns = [
  { id: 1, book: "Clean Architecture", dueDate: "Jul 08, 2026", daysLeft: 7 },
  {
    id: 2,
    book: "Introduction to Algorithms",
    dueDate: "Jul 03, 2026",
    daysLeft: 2,
  },
  {
    id: 3,
    book: "Database System Concepts",
    dueDate: "Jul 12, 2026",
    daysLeft: 11,
  },
];

export const recentlyReturned = [
  { id: 1, book: "The Pragmatic Programmer", returnedOn: "Jun 20, 2026" },
  { id: 2, book: "Refactoring", returnedOn: "Jun 12, 2026" },
  { id: 3, book: "You Don't Know JS", returnedOn: "Jun 05, 2026" },
];

export const bookCatalog = [
  {
    id: 1,
    title: "Clean Architecture",
    author: "Robert C. Martin",
    category: "Software Engineering",
    status: "Borrowed",
    cover: "bg-blue-100",
  },
  {
    id: 2,
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest",
    category: "Computer Science",
    status: "Borrowed",
    cover: "bg-emerald-100",
  },
  {
    id: 3,
    title: "Database System Concepts",
    author: "Silberschatz, Korth, Sudarshan",
    category: "Computer Science",
    status: "Borrowed",
    cover: "bg-amber-100",
  },
  {
    id: 4,
    title: "Design Patterns",
    author: "Gamma, Helm, Johnson, Vlissides",
    category: "Software Engineering",
    status: "Available",
    cover: "bg-purple-100",
  },
  {
    id: 5,
    title: "Operating System Concepts",
    author: "Silberschatz, Galvin, Gagne",
    category: "Computer Science",
    status: "Available",
    cover: "bg-rose-100",
  },
  {
    id: 6,
    title: "Computer Networking",
    author: "Kurose & Ross",
    category: "Networking",
    status: "Checked Out",
    cover: "bg-sky-100",
  },
  {
    id: 7,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    category: "Software Engineering",
    status: "Available",
    cover: "bg-orange-100",
  },
  {
    id: 8,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Russell & Norvig",
    category: "Artificial Intelligence",
    status: "Available",
    cover: "bg-teal-100",
  },
  {
    id: 9,
    title: "Discrete Mathematics",
    author: "Kenneth H. Rosen",
    category: "Mathematics",
    status: "Checked Out",
    cover: "bg-indigo-100",
  },
];

export const bookCategories = [
  "All Categories",
  "Computer Science",
  "Software Engineering",
  "Networking",
  "Artificial Intelligence",
  "Mathematics",
];

export const myBorrowedBooks = [
  {
    id: 1,
    title: "Clean Architecture",
    borrowDate: "Jun 24, 2026",
    dueDate: "Jul 08, 2026",
    daysRemaining: 7,
    status: "On Time",
    fine: 0,
  },
  {
    id: 2,
    title: "Introduction to Algorithms",
    borrowDate: "Jun 19, 2026",
    dueDate: "Jul 03, 2026",
    daysRemaining: 2,
    status: "Due Soon",
    fine: 0,
  },
  {
    id: 3,
    title: "Database System Concepts",
    borrowDate: "Jun 12, 2026",
    dueDate: "Jun 26, 2026",
    daysRemaining: -5,
    status: "Overdue",
    fine: 4.5,
  },
];

export const borrowHistory = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    borrowDate: "Jun 06, 2026",
    returnDate: "Jun 20, 2026",
    status: "Returned",
    finePaid: 0,
  },
  {
    id: 2,
    title: "Refactoring",
    borrowDate: "May 22, 2026",
    returnDate: "Jun 12, 2026",
    status: "Returned",
    finePaid: 1.5,
  },
  {
    id: 3,
    title: "You Don't Know JS",
    borrowDate: "May 10, 2026",
    returnDate: "Jun 05, 2026",
    status: "Returned",
    finePaid: 0,
  },
  {
    id: 4,
    title: "Structure and Interpretation of Computer Programs",
    borrowDate: "Apr 18, 2026",
    returnDate: "May 02, 2026",
    status: "Returned",
    finePaid: 0,
  },
  {
    id: 5,
    title: "Computer Organization and Design",
    borrowDate: "Mar 30, 2026",
    returnDate: "Apr 15, 2026",
    status: "Returned Late",
    finePaid: 3.0,
  },
  {
    id: 6,
    title: "Networking All-in-One",
    borrowDate: "Mar 02, 2026",
    returnDate: "Mar 20, 2026",
    status: "Returned",
    finePaid: 0,
  },
];
