import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
  serverHost: process.env.SERVER_HOST || "http://10.10.7.112:3000",
  serverURL: process.env.SERVER_URL || "https://sakib3000.binarybards.online",
  baseURL:
    process.env.BASE_URL || "https://sakib3000.binarybards.online/api/v1",
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;