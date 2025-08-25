"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Download, Filter } from "lucide-react"

const artworkCategories = [
  "Todos",
  "Pixel Art",
  "Concept Art",
  "Character Design",
  "Environment Art",
  "UI/UX Design",
  "Illustration",
]

const artworks = [
  {
    id: 1,
    title: "Cyberpunk Street",
    artist: "Maya Chen",
    category: "Pixel Art",
    image: "/cyberpunk-pixel-art-street-scene.png",
    likes: 1234,
    views: 5678,
    downloads: 89,
  },
  {
    id: 2,
    title: "Dragon Warrior",
    artist: "Alex Rivera",
    category: "Character Design",
    image: "/fantasy-dragon-warrior-character-art.png",
    likes: 2341,
    views: 8765,
    downloads: 156,
  },
  {
    id: 3,
    title: "Neon City",
    artist: "Luna Park",
    category: "Environment Art",
    image: "/neon-futuristic-city-environment-art.png",
    likes: 3456,
    views: 12345,
    downloads: 234,
  },
  {
    id: 4,
    title: "Retro Game UI",
    artist: "Sam Wilson",
    category: "UI/UX Design",
    image: "/retro-game-user-interface-design.png",
    likes: 987,
    views: 4321,
    downloads: 67,
  },
  {
    id: 5,
    title: "Space Explorer",
    artist: "Zoe Kim",
    category: "Concept Art",
    image: "/space-explorer-concept-art-sci-fi.png",
    likes: 1876,
    views: 7654,
    downloads: 123,
  },
  {
    id: 6,
    title: "Forest Temple",
    artist: "Rio Santos",
    category: "Environment Art",
    image: "/mystical-forest-temple-environment-art.png",
    likes: 2987,
    views: 9876,
    downloads: 198,
  },
]

export function ArtworkShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [likedArtworks, setLikedArtworks] = useState<Set<number>>(new Set())

  const filteredArtworks =
    selectedCategory === "Todos" ? artworks : artworks.filter((artwork) => artwork.category === selectedCategory)

  const toggleLike = (artworkId: number) => {
    const newLikedArtworks = new Set(likedArtworks)
    if (newLikedArtworks.has(artworkId)) {
      newLikedArtworks.delete(artworkId)
    } else {
      newLikedArtworks.add(artworkId)
    }
    setLikedArtworks(newLikedArtworks)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">Galeria de Artes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore uma coleção diversificada de artes criadas por jovens talentos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {artworkCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-card border-border"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {artwork.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{artwork.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">por {artwork.artist}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button
                        onClick={() => toggleLike(artwork.id)}
                        className="flex items-center gap-1 hover:text-accent transition-colors"
                      >
                        <Heart
                          className={`h-4 w-4 ${likedArtworks.has(artwork.id) ? "fill-accent text-accent" : ""}`}
                        />
                        <span>{artwork.likes.toLocaleString()}</span>
                      </button>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{artwork.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{artwork.downloads} downloads</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Filter className="mr-2 h-5 w-5" />
            Ver Mais Artes
          </Button>
        </div>
      </div>
    </section>
  )
}
