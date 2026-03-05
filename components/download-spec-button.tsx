"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadSpecButton() {
  return (
    <Button
      className="bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={() => {
        window.print()
      }}
    >
      <Download className="mr-2 h-4 w-4" />
      Download as PDF
    </Button>
  )
}
