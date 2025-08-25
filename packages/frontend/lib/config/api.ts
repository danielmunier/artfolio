export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  TIMEOUT: 10000, // 10 seconds
  RETRIES: 3,
};

export const API_ENDPOINTS = {
  PORTFOLIO: (username: string) => `/api/portfolio/${username}`,
  USER_PROFILE: (username: string) => `/api/users/${username}`,
  USER_ARTS: (username: string) => `/api/users/${username}/arts`,
};
