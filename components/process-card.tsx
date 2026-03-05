import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProcessCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export function ProcessCard({ title, description, icon: Icon, index }: ProcessCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/60 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="absolute top-0 left-0 h-1 w-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardContent className="flex flex-col items-center px-6 pt-8 pb-8 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <span className="mb-2 inline-block rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
          {"Step " + String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mb-3 font-serif text-lg font-bold tracking-tight text-card-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
