import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { MaterialProperty } from "@/lib/specs-data"

interface ComparisonTableProps {
  data: MaterialProperty[]
}

export function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <section>
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border bg-muted/50 px-6 py-5">
          <h3 className="font-serif text-lg font-bold text-card-foreground">
            Standards Comparison
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Side-by-side comparison of key material properties across our supported standards.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-foreground/[0.03] hover:bg-foreground/[0.03]">
              <TableHead className="w-1/3 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Property
              </TableHead>
              <TableHead className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {'IS 1239 / BS 21'}
              </TableHead>
              <TableHead className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary">
                ASTM A865
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.property}
                className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}
              >
                <TableCell className="px-6 py-3.5 text-sm font-medium text-card-foreground">
                  {row.property}
                </TableCell>
                <TableCell className="px-6 py-3.5 text-sm text-muted-foreground">
                  {row.is1239}
                </TableCell>
                <TableCell className="px-6 py-3.5 text-sm text-muted-foreground">
                  {row.astm}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
