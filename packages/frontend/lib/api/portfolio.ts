import { PortfolioData } from "../../../types";
import { API_CONFIG, API_ENDPOINTS } from "@/lib/config/api";

export async function getPortfolioData(username: string): Promise<PortfolioData> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.PORTFOLIO(username)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Para SSR, não usar cache
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    
    // Fallback data para desenvolvimento
    return {
      user: {
        id: "1",
        username: username,
        email: "fluf@example.com",
        name: "fluf",
        bio: "Tenho uma cabeça enorme",
        avatar: "https://i.pinimg.com/736x/ad/68/37/ad683743543fda909da12f6542ad9492.jpg",
        status: "online",
        lastSeen: "4 hours ago",
        lastLogin: new Date().toISOString(),
        userBackground: "starry-head",
        // Música do perfil
        currentSong: "Midnight City",
        artistName: "M83",
        spotifyUrl: "https://open.spotify.com/track/0FRkAE1ej8nV0lG2M9NINu",
        isPlaying: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        social: {
          discord: "https://discord.com/users/1234567890",
          instagram: "https://www.instagram.com/fluf/",
          spotify: "https://open.spotify.com/user/1234567890",
        },
        stats: {
          views: 97,
          likes: 97,
          arts: 12,
          contracts: 3,
        },
      },
      arts: Array.from({ length: 12 }, (_, i) => ({
        id: i.toString(),
        userId: "1",
        title: `Artwork ${i + 1}`,
        description: `Descrição da arte ${i + 1}`,
        imageUrl: `/anime-style-game-character-design.png`,
        category: "Digital Art",
        tags: ["anime", "character", "digital"],
        isPublic: true,
        likes: Math.floor(Math.random() * 100) + 1,
        views: Math.floor(Math.random() * 200) + 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })),
    };
  }
}
