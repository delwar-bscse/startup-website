import { ContactItem, FollowUs, QuickLink } from "@/types/types";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const quickLinks: QuickLink[] = [
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
  // {
  //   title: "Update News",
  //   url: "#",
  // },
];

export const browseCategory: QuickLink[] = [
  {
    title: "Terms and Conditions",
    url: "/terms-and-conditions",
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    title: "FAQ",
    url: "/faqs",
  },
  // {
  //   title: "Subscription Plans",
  //   url: "#",
  // },
];

export const contactInfo: ContactItem[] = [
  {
    title: "+2123 654 7898",
    icon: <FiPhone size={20} />,
  },
  {
    title: "25/B Milford Road, New York",
    icon: <GrLocation size={20} />,
  },
  {
    title: "info@example.com",
    icon: <FiMail size={20} />,
  },
  {
    title: "Mon-Fri ( 9:00Am - 8:00PM )",
    icon: <AiOutlineClockCircle size={20} />,
  },
];

export const followUs: FollowUs[] = [
  {
    icon: <FaFacebookF size={20} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    url: "https://www.linkedin.com",
  },
  {
    icon: <FaYoutube size={20} />,
    url: "https://www.youtube.com",
  },
];
