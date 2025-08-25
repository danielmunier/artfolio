// Portfolio types
export * from './portfolio';

// Re-export common types for convenience
export type { User, Art, PortfolioData } from './portfolio';
export type { 
  CreateUserRequest, 
  CreateArtRequest, 
  UpdateUserRequest, 
  UpdateArtRequest 
} from './portfolio';
export type { ApiResponse, PaginatedResponse } from './portfolio';
