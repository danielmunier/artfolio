import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, MessageCircle } from "lucide-react"

const featuredArtists = [
  {
    id: 1,
    name: "Maya Chen",
    username: "@mayapixels",
    specialty: "Pixel Art",
    followers: "12.5K",
    artworks: 89,
    avatar: "/young-asian-female-artist-avatar.png",
    coverArt: "/colorful-pixel-art-game-character.png",
    likes: 2340,
    views: 15600,
  },
  {
    id: 2,
    name: "Alex Rivera",
    username: "@alexgaming",
    specialty: "Concept Art",
    followers: "8.2K",
    artworks: 156,
    avatar: "/young-latino-male-artist-avatar.png",
    coverArt: "/futuristic-game-environment-concept-art.png",
    likes: 1890,
    views: 12400,
  },
  {
    id: 3,
    name: "Luna Park",
    username: "@lunadraws",
    specialty: "Character Design",
    followers: "15.8K",
    artworks: 203,
    avatar: "/young-female-artist-with-colorful-hair-avatar.png",
    coverArt: "/anime-style-game-character-design.png",
    likes: 3120,
    views: 18900,
  },
]

export function FeaturedArtists() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">Artistas em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os talentos que estão definindo o futuro da arte digital e gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtists.map((artist) => (
            <Card
              key={artist.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-card border-border"
            >
              <CardContent className="p-0">
                {/* Cover Art */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={artist.coverArt || "/placeholder.svg"}
                    alt={`Arte de ${artist.name}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {artist.specialty}
                    </Badge>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={artist.avatar || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-border"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-lg text-foreground">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">{artist.username}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{artist.followers} seguidores</span>
                    <span>{artist.artworks} obras</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{artist.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{artist.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>Ver Perfil</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
