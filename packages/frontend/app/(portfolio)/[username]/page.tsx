"use client"
import {
  Volume2,
  Pause,
  SkipBack,
  SkipForward,
  Eye,
  Instagram,
  Heart,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BsSpotify } from "react-icons/bs";
import { useState } from "react";

export default function ProfilePage() {
  const [isProfileLiked, setIsProfileLiked] = useState(false);
  
  const user = {
    name: "fluf",
    subtitle: "Tenho uma cabeça enorme",
    avatar:
      "https://i.pinimg.com/736x/ad/68/37/ad683743543fda909da12f6542ad9492.jpg",
    status: "online",
    lastSeen: "4 hours ago",
  };

  // Mock likes/views for each image
  const [images, setImages] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      src: `/anime-style-game-character-design.png`,
      alt: `Gallery image ${i + 1}`,
      likes: Math.floor(Math.random() * 100) + 1,
      views: Math.floor(Math.random() * 200) + 10,
      isLiked: false,
    }))
  );

  const handleLike = (imageId: number) => {
    setImages(prevImages =>
      prevImages.map(img =>
        img.id === imageId
          ? {
              ...img,
              likes: img.isLiked ? img.likes - 1 : img.likes + 1,
              isLiked: !img.isLiked,
            }
          : img
      )
    );
  };

  const handleProfileLike = () => {
    setIsProfileLiked(!isProfileLiked);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          .heartbeat-animation {
            animation: heartbeat 2s ease-in-out infinite !important;
          }
        `
      }} />
      {/* Sound icon in top left */}
      <div className="absolute top-6 left-6">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Volume2 className="w-5 h-5 text-white/70 hover:text-white" />
        </Button>
      </div>

      {/* Main profile content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="flex flex-col items-center space-y-6 max-w-md w-full">
          {/* Profile image */}
          <div className="relative">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-white/20"
            />
          </div>

          {/* Name and subtitle */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-light tracking-wide">{user.name}</h1>
            <p className="text-white/70 text-sm">{user.subtitle}</p>
          </div>

          {/* User status card */}
          {/* <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-4 w-full">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/dark-silhouette-avatar.png" />
                <AvatarFallback className="bg-white/20 text-white">S</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{user.name}</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-white/50 text-xs">last seen 4 hours ago</p>
              </div>
            </div>
          </Card> */}

          {/* Social media icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="w-6 h-6 bg-[#5865F2] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">D</span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="w-6 h-6 bg-[#1DB954] rounded-full flex items-center justify-center">
                <BsSpotify className="w-4 h-4 text-white" />
              </div>
            </Button>
          </div>

          {/* View counter */}
          <div className="flex items-center space-x-2 text-white/70 bg-white/10 px-3 py-2 rounded-full">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">97</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleProfileLike}
                className="w-8 h-8 hover:bg-transparent hover:text-red-500 transition-colors cursor-pointer m-0 p-0"
              >
                <Heart 
                  className={`w-4 h-4 cursor-pointer transition-colors ${
                    isProfileLiked 
                      ? "text-red-500 fill-red-500" 
                      : "text-white/70 hover:text-red-500 heartbeat-animation"
                  }`}
                />
              </Button>
              <span className="text-sm font-medium">{isProfileLiked ? "98" : "97"}</span>
            </div>
          </div>
        </div>

        {/* Music player */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-4">
            <div className="flex items-center space-x-4">
              <img
                src="/album-cover-blue-abstract-art.png"
                alt="Album cover"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium text-sm">
                  glimpse of us
                </h3>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-white/70 text-xs">1:15</span>
                  <div className="flex-1 bg-white/20 rounded-full h-1">
                    <div className="bg-white rounded-full h-1 w-1/3"></div>
                  </div>
                  <span className="text-white/70 text-xs">3:53</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white/70 hover:text-white transition-colors"
                >
                  <SkipBack className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white/70 hover:text-white transition-colors"
                >
                  <Pause className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white/70 hover:text-white transition-colors"
                >
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Image grid */}
        <div className="mt-16 w-full max-w-5xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative group w-full h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-lg transition-opacity duration-200 group-hover:opacity-80 cursor-pointer"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2">
                  <div className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-0.5">
                    <button
                      onClick={() => handleLike(img.id)}
                      className="flex items-center gap-1 transition-transform duration-200 hover:bg-dark rounded-full p-1"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-all duration-200 ${
                          img.isLiked
                            ? "text-red-500 fill-red-500"
                            : "text-white/80 hover:text-red-400"
                        }`}
                        strokeWidth={2}
                      />
                      <span className="text-xs text-white/80 font-medium">
                        {img.likes}
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-0.5">
                    <Eye
                      className="w-3.5 h-3.5 text-white/80"
                      strokeWidth={2}
                    />
                    <span className="text-xs text-white/80 font-medium">
                      {img.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
