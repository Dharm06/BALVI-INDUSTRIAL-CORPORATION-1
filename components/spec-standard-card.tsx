import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { StandardSpec } from "@/lib/specs-data"
import { Ruler } from "lucide-react"

interface SpecStandardCardProps {
  spec: StandardSpec
}

export function SpecStandardCard({ spec }: SpecStandardCardProps) {
  return (
    <section id={spec.id} className="scroll-mt-24">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        {/* Card Header */}
        <div className="flex flex-col gap-3 border-b border-border bg-muted/50 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Ruler className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-card-foreground">
                {spec.name}
              </h3>
              <p className="mt-0.5 max-w-xl text-sm text-muted-foreground text-pretty">
                {spec.description}
              </p>
            </div>
          </div>
          <Badge variant="outline" className="w-fit shrink-0 border-primary/30 text-primary">
            {spec.sizeRange}
          </Badge>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="bg-foreground/[0.03] hover:bg-foreground/[0.03]">
              <TableHead className="w-2/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Property
              </TableHead>
              <TableHead className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Specification
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {spec.rows.map((row, index) => (
              <TableRow
                key={row.property}
                className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}
              >
                <TableCell className="px-6 py-3.5 text-sm font-medium text-card-foreground">
                  {row.property}
                </TableCell>
                <TableCell className="px-6 py-3.5 text-sm text-muted-foreground">
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
