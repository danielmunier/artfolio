export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  bio?: string;
  avatar?: string;
  userBackground?: string;
  status: "online" | "offline" | "away";
  lastSeen?: string;
  lastLogin?: string;
  // Música do perfil
  currentSong?: string;
  artistName?: string;
  spotifyUrl?: string;
  isPlaying?: boolean;
  createdAt: string;
  updatedAt: string;
  social: {
    discord?: string;
    instagram?: string;
    spotify?: string;
  };
  stats: {
    views: number;
    likes: number;
    arts: number;
    contracts: number;
  };
}

export interface Art {
  id: string;
  userId: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  tags: string[];
  isPublic: boolean;
  likes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioData {
  user: User;
  arts: Art[];
}

// Novos tipos para o sistema expandido
export interface ArtLike {
  id: string;
  artId: string;
  userId: string;
  createdAt: string;
}

export interface ProfileLike {
  id: string;
  artistId: string;
  userId: string;
  createdAt: string;
}

export interface ArtView {
  id: string;
  artId: string;
  userId?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

export interface ProfileView {
  id: string;
  artistId: string;
  userId?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

export interface Contract {
  id: string;
  artistId: string;
  clientId: string;
  title: string;
  description?: string;
  budget: number;
  status: ContractStatus;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

export type ContractStatus = 
  | "pending" 
  | "accepted" 
  | "inProgress" 
  | "completed" 
  | "cancelled" 
  | "disputed";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  data?: any;
  createdAt: string;
}

export type NotificationType = 
  | "like" 
  | "view" 
  | "contract" 
  | "message" 
  | "system";

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}

// Tipos para criação/atualização
export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  name: string;
  bio?: string;
  avatar?: string;
  userBackground?: string;
  social?: {
    discord?: string;
    instagram?: string;
    spotify?: string;
  };
}

export interface CreateArtRequest {
  userId: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  tags: string[];
  isPublic?: boolean;
}

export interface CreateContractRequest {
  artistId: string;
  clientId: string;
  title: string;
  description?: string;
  budget: number;
  startDate?: string;
  endDate?: string;
}

export interface UpdateUserRequest {
  name?: string;
  bio?: string;
  avatar?: string;
  userBackground?: string;
  social?: {
    discord?: string;
    instagram?: string;
    spotify?: string;
  };
}

export interface UpdateArtRequest {
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  isPublic?: boolean;
}

export interface UpdateContractRequest {
  title?: string;
  description?: string;
  budget?: number;
  status?: ContractStatus;
  startDate?: string;
  endDate?: string;
}

// Tipos para respostas da API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Tipos para estatísticas
export interface UserStats {
  totalViews: number;
  totalLikes: number;
  totalArts: number;
  totalContracts: number;
  monthlyViews: number;
  monthlyLikes: number;
}

export interface ArtStats {
  totalViews: number;
  totalLikes: number;
  uniqueViews: number;
  uniqueLikes: number;
}
