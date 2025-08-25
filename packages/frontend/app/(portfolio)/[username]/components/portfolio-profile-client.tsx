"use client";

import { useState } from "react";
import { Volume2, Pause, SkipBack, SkipForward, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BsDiscord, BsInstagram, BsSpotify } from "react-icons/bs";
import { User, Art } from "../../../../../types";
import { DynamicBackground } from "../../../../components/dynamic-background";

interface PortfolioProfileClientProps {
  user: User;
  arts: Art[];
}

export function PortfolioProfileClient({ user, arts }: PortfolioProfileClientProps) {
  const [isProfileLiked, setIsProfileLiked] = useState(false);
  const [images, setImages] = useState(
    arts.map((art) => ({
      ...art,
      isLiked: false,
    }))
  );

  const handleLike = (imageId: string) => {
    setImages((prevImages) =>
      prevImages.map((img) =>
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
    <div className="min-h-screen bg-black text-white relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes heartbeat {
              0% { transform: scale(1); }
              50% { transform: scale(1.2); }
              100% { transform: scale(1); }
            }
            .heartbeat-animation {
              animation: heartbeat 2s ease-in-out infinite !important;
            }
          `,
        }}
      />
      
      {/* Dynamic Background */}
      <DynamicBackground 
        backgroundType={user.userBackground || 'default'} 
        className=""
      />
      
      {/* Sound icon in top left */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Volume2 className="w-5 h-5 text-white/70 hover:text-white" />
        </Button>
      </div>

      {/* Main profile content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative z-10">
        <div className="flex flex-col items-center space-y-6 max-w-md w-full">
          {/* Profile image */}
          <div className="relative">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-white/20"
            />
          </div>

                     {/* Name and bio */}
           <div className="text-center space-y-2">
             <h1 className="text-4xl font-light tracking-wide">{user.name}</h1>
             <p className="text-white/70 text-sm">{user.bio}</p>
           </div>

          {/* Social media icons */}
          <div className="flex items-center space-x-4">
            {user.social.discord && (
              <a
                href={user.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#5865F2]/20 hover:bg-[#5865F2]/30 transition-colors"
                title="Discord"
              >
                <BsDiscord className="w-5 h-5 text-[#5865F2]" />
              </a>
            )}
            {user.social.instagram && (
              <a
                href={user.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr transition-colors"
                title="Instagram"
              >
                <BsInstagram className="w-5 h-5 text-[#E1306C]" />
              </a>
            )}
            {user.social.spotify && (
              <a
                href={user.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1DB954]/20 hover:bg-[#1DB954]/30 transition-colors"
                title="Spotify"
              >
                <BsSpotify className="w-5 h-5 text-[#1DB954]" />
              </a>
            )}
          </div>

          {/* View counter */}
          <div className="flex items-center space-x-2 text-white/70 bg-white/10 px-3 py-2 rounded-full">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">{user.stats.views}</span>
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
              <span className="text-sm font-medium">
                {isProfileLiked ? user.stats.likes + 1 : user.stats.likes}
              </span>
            </div>
          </div>
        </div>

        {/* Music player */}
       

        {/* Image grid */}
        <div className="mt-16 w-full max-w-5xl px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative group w-full h-full">
                <img
                  src={img.imageUrl}
                  alt={img.title}
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
