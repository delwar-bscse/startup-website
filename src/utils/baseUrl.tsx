/* eslint-disable @typescript-eslint/no-unused-vars */
import { BASE_URL, IMAGE_URL } from "@/config/envConfig";

// export const getBaseUrl = () => {
//   return "https://sakib_3000.binarybards.online/api/v1";
// };

// export const getImageUrl = (primaryUrl: string) => {
//   return "https://sakib_3000.binarybards.online/";
// };

export const getBaseUrl = () => {
  return "http://10.10.7.112:3000/api/v1";
  // console.log("base", BASE_URL);
  // return BASE_URL;
};

export const getImageUrl = () => {
  return "http://10.10.7.112:3000";
  // console.log("image", IMAGE_URL);
  // return IMAGE_URL;
};
