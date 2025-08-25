"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Palette, User, Plus } from "lucide-react"
import { ToggleTheme } from "./toggle-theme"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="font-serif font-bold text-xl text-foreground">ArtPort</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Explorar
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Artistas
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Pixel Art
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Gaming Art
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar artistas ou estilos..." className="pl-10 bg-input border-border" />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">

            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Criar Portfólio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar artistas..." className="pl-10 bg-input border-border" />
              </div>
              <nav className="flex flex-col gap-2">
                <a href="#" className="py-2 text-foreground hover:text-primary">
                  Explorar
                </a>
                <a href="#" className="py-2 text-foreground hover:text-primary">
                  Artistas
                </a>
                <a href="#" className="py-2 text-foreground hover:text-primary">
                  Pixel Art
                </a>
                <a href="#" className="py-2 text-foreground hover:text-primary">
                  Gaming Art
                </a>
              </nav>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Entrar
                </Button>
              
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
