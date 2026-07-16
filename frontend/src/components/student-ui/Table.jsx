import React from "react";

/**
 * Table primitives — composable, shadcn-style building blocks so every
 * data table in the app (Admin or Student) shares the same look.
 *
 *   <Table>
 *     <TableHeader>
 *       <TableRow>
 *         <TableHead>Column</TableHead>
 *       </TableRow>
 *     </TableHeader>
 *     <TableBody>
 *       <TableRow>
 *         <TableCell>Value</TableCell>
 *       </TableRow>
 *     </TableBody>
 *   </Table>
 */
export function Table({ children, className = "" }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full border-collapse text-left text-sm ${className}`}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children }) {
  return <thead className="border-b border-slate-200">{children}</thead>;
}

export function TableBody({ children }) {
  return (
    <tbody className="divide-y divide-slate-100">{children}</tbody>
  );
}

export function TableRow({ children, className = "" }) {
  return (
    <tr className={`transition-colors hover:bg-slate-50/80 ${className}`}>
      {children}
    </tr>
  );
}

export function TableHead({ children, className = "" }) {
  return (
    <th
      className={`whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 ${className}`}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className = "" }) {
  return (
    <td className={`whitespace-nowrap px-4 py-3.5 text-slate-700 ${className}`}>
      {children}
    </td>
  );
}
