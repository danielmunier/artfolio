import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Para Jovens Artistas
            </span>
          </div>

          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Showcase Sua Arte,
            <br />
            <span className="text-primary">Conecte-se com o Mundo</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A plataforma definitiva para artistas jovens showcasearem seus portfólios. De pixel art a concept art
            gaming, sua criatividade merece destaque.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explorar Portfólios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Criar Meu Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
