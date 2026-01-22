import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">GeneraDocs</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            GeneraDocs convierte datos simples en documentos profesionales.
          </p>
        </div>
      </div>
    </footer>
  )
}
