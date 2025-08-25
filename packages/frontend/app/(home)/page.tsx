"use client";
import {
  Search,
  Users,
  Palette,
  ArrowRight,
  Star,
  Eye,
  Heart,
  MessageCircle,
  Shuffle,
  Grid3X3,
  Sparkles,
  TrendingUp,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { DynamicBackground } from "@/components/dynamic-background";

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [username, setUsername] = useState("");

  // Artes aleatórias para a página de exploração
  const randomArtworks = [
    {
      id: "1",
      title: "Neon Futuristic City",
      artist: "alex_neon",
      image: "/neon-futuristic-city-environment-art.png",
      category: "Digital Art",
      likes: 234,
      views: 1200,
    },
    {
      id: "2",
      title: "Mystical Forest Temple",
      artist: "nature_soul",
      image: "/mystical-forest-temple-environment-art.png",
      category: "Fantasy",
      likes: 189,
      views: 890,
    },
    {
      id: "3",
      title: "Cyberpunk Street Scene",
      artist: "city_vibes",
      image: "/cyberpunk-pixel-art-street-scene.png",
      category: "Urban",
      likes: 156,
      views: 650,
    },
    {
      id: "4",
      title: "Space Explorer",
      artist: "deep_blue",
      image: "/space-explorer-concept-art-sci-fi.png",
      category: "Sci-Fi",
      likes: 298,
      views: 1450,
    },
    {
      id: "5",
      title: "Fantasy Dragon Warrior",
      artist: "glitch_master",
      image: "/fantasy-dragon-warrior-character-art.png",
      category: "Fantasy",
      likes: 167,
      views: 780,
    },
    {
      id: "6",
      title: "Retro Game UI",
      artist: "zen_creator",
      image: "/retro-game-user-interface-design.png",
      category: "Game Art",
      likes: 203,
      views: 920,
    },
    {
      id: "7",
      title: "Futuristic Game Environment",
      artist: "space_artist",
      image: "/futuristic-game-environment-concept-art.png",
      category: "Concept Art",
      likes: 345,
      views: 2100,
    },
    {
      id: "8",
      title: "Pixel Art Cyberpunk City",
      artist: "pixel_master",
      image: "/pixel-art-cyberpunk-city.png",
      category: "Pixel Art",
      likes: 278,
      views: 1350,
    },
  ];

  // Categorias para filtros
  const categories = [
    { id: "all", name: "Todas", icon: <Grid3X3 className="w-4 h-4" /> },
    {
      id: "digital",
      name: "Digital Art",
      icon: <Sparkles className="w-4 h-4" />,
    },
    { id: "fantasy", name: "Fantasy", icon: <Sparkles className="w-4 h-4" /> },
    { id: "urban", name: "Urban", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "abstract", name: "Abstract", icon: <Palette className="w-4 h-4" /> },
    {
      id: "minimalist",
      name: "Minimalist",
      icon: <Grid3X3 className="w-4 h-4" />,
    },
    { id: "surreal", name: "Surreal", icon: <Sparkles className="w-4 h-4" /> },
    { id: "pixel", name: "Pixel Art", icon: <Grid3X3 className="w-4 h-4" /> },
  ];

  // Estado para artes embaralhadas
  const [shuffledArtworks, setShuffledArtworks] = useState(randomArtworks);

  // Função para embaralhar artes
  const shuffleArtworks = () => {
    const shuffled = [...randomArtworks].sort(() => Math.random() - 0.5);
    setShuffledArtworks(shuffled);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any special characters and spaces, keep only alphanumeric and hyphens
    const value = e.target.value.replace(/[^a-zA-Z0-9-]/g, "");
    setUsername(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      window.open(
        `http://${window.location.hostname}.com/${username}`,
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DynamicBackground
        backgroundType="gradient"
      />

      {/* Main Content with left margin for sidebar */}
      <div className="ml-16 relative z-10">
        {/* Hero Section with URL Input */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Portfólios Artísticos
              <span className="block text-accent">Discover & Hire</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-white">
              Crie portfólios únicos com fundos animados e música personalizada.
              <span>
                <br />
                Cada artista tem seu estilo, cada perfil conta uma história.
              </span>
            </p>

            {/* URL Input */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex items-center bg-card border border-border rounded-lg p-2 focus-within:border-accent transition-colors">
                <span className="text-muted-foreground pl-3 text-sm font-mono">
                  {typeof window !== 'undefined' ? window.location.hostname : 'localhost'}.com/
                </span>
                <Input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="username"
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 text-sm"
                  maxLength={30}
                  autoComplete="new-password"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer px-4 py-2 ml-2"
                  disabled={!username.trim()}
                >
                  <span className="text-xs">Registrar</span>
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Shuffle className="w-8 h-8 text-accent" />
                Explorar Artes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-white">
                Explore obras incríveis de artistas talentosos, encontre inspiração
                e contrate para seus projetos. Filtre por categoria e descubra o que
                há de melhor na comunidade criativa.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8 space-y-6">
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Busque artes ou artistas..."
                    className="pl-10 bg-card border-border"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm transition-colors text-white ${
                      selectedCategory === category.id
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border"
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Shuffle Button */}
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={shuffleArtworks}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Embaralhar Artes
                </Button>
              </div>
            </div>

            {/* Artworks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {shuffledArtworks
                .filter(
                  (art) =>
                    selectedCategory === "all" ||
                    art.category.toLowerCase().includes(selectedCategory)
                )
                .map((artwork) => (
                  <div
                    key={artwork.id}
                    className="relative group w-full h-full cursor-pointer"
                  >
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover rounded-lg transition-opacity duration-200 group-hover:opacity-80"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-0.5">
                          <span className="text-xs text-white/80 font-medium">
                            {artwork.category}
                          </span>
                        </div>
                        <div className="bg-black/60 rounded-full px-2 py-0.5">
                          <h4 className="text-xs text-white font-medium truncate">
                            {artwork.title}
                          </h4>
                          <p className="text-xs text-white/80">@{artwork.artist}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-0.5">
                          <Heart className="w-3.5 h-3.5 text-white/80" strokeWidth={2} />
                          <span className="text-xs text-white/80 font-medium">
                            {artwork.likes}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-0.5">
                          <Eye className="w-3.5 h-3.5 text-white/80" strokeWidth={2} />
                          <span className="text-xs text-white/80 font-medium">
                            {artwork.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-accent  hover:bg-accent hover:text-accent-foreground px-8 text-white cursor-pointer"
              >
                Carregar Mais
                <ArrowRight className="w-4 h-4 ml-2 " />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
