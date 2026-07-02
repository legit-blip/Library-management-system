export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-6 text-center text-sm text-muted-foreground">
      <p>© {currentYear} LibraryHub. All rights reserved.</p>
    </footer>
  );
}
