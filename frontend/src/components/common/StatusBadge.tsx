interface StatusBadgeProps {
  status:
    | "available"
    | "borrowed"
    | "reserved"
    | "returned"
    | "active"
    | "inactive";
  className?: string;
}

const statusClasses = {
  available: "bg-success/10 text-success border border-success/20",
  borrowed: "bg-warning/10 text-warning border border-warning/20",
  reserved: "bg-primary/10 text-primary border border-primary/20",
  returned: "bg-success/10 text-success border border-success/20",
  active: "bg-success/10 text-success border border-success/20",
  inactive: "bg-muted text-muted-foreground border border-border",
};

const statusLabels = {
  available: "Available",
  borrowed: "Borrowed",
  reserved: "Reserved",
  returned: "Returned",
  active: "Active",
  inactive: "Inactive",
};

export default function StatusBadge({
  status,
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusClasses[status]} ${className}`}
    >
      {statusLabels[status]}
    </span>
  );
}
