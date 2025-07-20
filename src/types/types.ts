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

interface Entrepreneur {
    _id: string;
    name: string;
    profileImg: string;
}

export interface Project {
    [x: string]: any;
    _id: string;
    entrepreneurId: Entrepreneur;
    title: string;
    industry: string;
    projectType: string;
    primaryUrl: string;
    deadLine: string;
    fundingGoal: number;
    fundsRaised: number;
    equityOffered: number;
    equitySold: number;
    fundingStatus: string;
    isVerified: boolean;
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