"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <img 
              src="/logo-generadocs.png" 
              alt="GeneraDocs" 
              className="h-9 w-auto"
            />
          </a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Probar demo
          </Button>
        </div>
      </div>
    </header>
  )
}
