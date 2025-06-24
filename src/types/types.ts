import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';


export type userRole = 'investor' |'entrepreneur'

export type ContactItem = {
  title: string;
  icon: ReactNode;
};

export type QuickLink = {
  title: string;
  url: string;
};

export type FollowUs = {
  icon: ReactNode;
  url: string;
};

export type ContactData = {
  id: number;
  title: string;
  icon: StaticImageData;
  desc1: string;
  desc2: string;
}


// -------------------------- Contact Page Data Type -------------------------- //

export interface MissionState {
  id: number;
  status: boolean;
  title: string;  // You can keep it optional if not always required.
  des: string;
}

export interface OurStory {
  title: string;
  desc: string;
  imgs: StaticImageData[];  // Array of image URLs.
}

export interface OurVision {
  title: string;
  desc: string;
  lists: string[];  // List of vision points.
  imgs: StaticImageData[];  // Array of image URLs.
}

export interface OurMission {
  title: string;
  state: MissionState[];  // Array of mission states.
  imgs: StaticImageData[];  // Array of image URLs.
}

export interface Project {
  id: number;
  name: string;
  startedDate: string;  // Could be Date type if you'd prefer to handle dates directly.
  target: number;
  raised: number;
  left: number;
  img: StaticImageData;  // Assuming this is an image path or URL.
  ourStory: OurStory;
  ourVision: OurVision;
  ourMission: OurMission;
}

// -------------------------- Home Page Data Type -------------------------- //
export type ProjectOverview = {
  id: number;
  title: string;
  number: string | number;
};

export type WhyChooseUs = {
  id: number;
  title: string;
  des: string;
}