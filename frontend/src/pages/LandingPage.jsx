import {
  Search,
  BookOpen,
  Wifi,
  Users,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

const books = [
  { title: "The Quantum Horizon", author: "Dr. Helena Vance", tag: "Science" },
  { title: "Ancient Echoes", author: "Marcus Aurelius II", tag: "History" },
  { title: "Modern Solitude", author: "Elena Rossi", tag: "Fiction" },
  { title: "Digital Ethics", author: "Simon K. Low", tag: "Technology" },
  { title: "Structural Grace", author: "Arthur Webb", tag: "Arts" },
  { title: "The Last Colony", author: "Julian Frost", tag: "History" },
];

const services = [
  {
    icon: BookOpen,
    title: "Digital Library",
    body: "Instantly borrow e-books, audiobooks, and digital magazines across all your devices with your library card.",
  },
  {
    icon: Wifi,
    title: "Study Spaces",
    body: "Quiet individual carrels and collaborative rooms equipped with high-speed fiber and conferencing tools.",
  },
  {
    icon: Users,
    title: "Community Events",
    body: "Join our curated workshops, guest speaker series, and literary readings designed for lifelong learners.",
  },
];

const hours = [
  ["Monday – Thursday", "9am – 9pm"],
  ["Friday – Saturday", "9am – 6pm"],
  ["Sunday", "12pm – 5pm"],
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-line bg-bg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="font-serif text-xl font-semibold tracking-tight">
            KCMIT LIBRARY
          </span>

          <nav className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              className="border-b-2 border-accent px-1 py-1 text-sm font-semibold"
            >
              Home
            </a>
            <a href="#" className="px-2 py-1 text-sm text-slate hover:text-ink">
              Catalog
            </a>
            <a href="#" className="px-2 py-1 text-sm text-slate hover:text-ink">
              Events
            </a>
            <a href="#" className="px-2 py-1 text-sm text-slate hover:text-ink">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-sm border border-line bg-panel px-4 py-1.5 text-sm sm:flex">
              <Search size={15} />
              Search catalog
            </button>
            <Link to="/login">
              <button className="bg-ink px-5 py-2 text-sm font-semibold text-black">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight">
              Knowledge for a Digital Age.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-slate">
              Explore millions of titles, reserve study spaces, and join a
              community of curious minds — all with one library card.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-3 bg-ink px-12 py-6 text-base font-semibold text-white">
                Get a Library Card
              </button>
              <button className="border border-ink bg-bg px-12 py-6 text-base font-semibold">
                Browse Catalog
              </button>
            </div>
          </div>
          <div className="aspect-[536/556] w-full rounded-lg bg-ink/10" />
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-panel py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold">
                Featured Collection
              </h2>
              <p className="text-slate">
                Hand-picked titles from our librarians
              </p>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button className="flex h-8 w-8 items-center justify-center border border-line">
                ‹
              </button>
              <button className="flex h-8 w-8 items-center justify-center border border-line">
                ›
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {books.map((book) => (
              <div key={book.title} className="w-[200px] flex-none">
                <div className="h-[300px] w-full border border-line bg-white" />
                <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">
                  {book.title}
                </h3>
                <p className="text-sm text-slate">
                  {book.author} • {book.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold">Our Services</h2>
            <p className="mt-1 text-lg text-slate">
              Everything you need under one roof
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-line bg-white p-12">
                <div className="flex h-12 w-12 items-center justify-center bg-chip">
                  <Icon size={24} className="text-ink" />
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate">{body}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a Librarian callout */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden bg-ink px-12 py-16 md:flex-row md:items-center">
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-xl bg-accent/10" />
          <div className="relative z-10 max-w-xl">
            <h2 className="font-serif text-3xl font-semibold text-white">
              Need help finding something?
            </h2>
            <p className="mt-3 text-white/80">
              Our librarians are available online and in person to help with
              research, recommendations, and more.
            </p>
          </div>
          <button className="relative z-10 flex items-center gap-3 bg-white px-12 py-6 font-bold">
            <MessageCircle size={20} />
            Ask a Librarian
          </button>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <h2 className="font-serif text-3xl font-semibold">
            Location &amp; Hours
          </h2>

          <div className="flex gap-6">
            <MapPin className="mt-1 flex-none" size={20} />
            <div>
              <h3 className="font-serif text-xl font-semibold">Main Branch</h3>
              <p className="text-slate">428 Birchwood Lane, Rivermill</p>
            </div>
          </div>

          <div className="flex gap-6">
            <Clock className="mt-1 flex-none" size={20} />
            <div className="grid w-full grid-cols-2 gap-y-1">
              {hours.map(([day, time]) => (
                <div key={day} className="contents">
                  <span className="text-slate">{day}</span>
                  <span className="font-semibold">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#" className="font-semibold underline">
            Get Directions
          </a>
        </div>

        <div className="aspect-[536/318] w-full rounded-lg border border-line bg-chip md:w-1/2" />
      </section>

      {/* Footer */}
      <footer className="bg-footer py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-semibold">
              The Modern Archive
            </h3>
            <p className="mt-3 max-w-xs text-sm text-ink/80">
              A community library bringing people and ideas together since 1965.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider">
              Library
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate">
              <li>Catalog Search</li>
              <li>New Arrivals</li>
              <li>Research Guides</li>
              <li>Memberships</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider">
              Support
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate">
              <li>Hours &amp; Location</li>
              <li>Privacy Policy</li>
              <li>Accessibility</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
