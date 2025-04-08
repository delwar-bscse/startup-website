import telephone from "@/assets/contact/telephone.png";
import email from "@/assets/contact/email.png";
import location from "@/assets/contact/location.png";
import { ContactData } from "@/types/types";

export const contactData: ContactData[] = [
  {
    id: 1,
    title: "Phone Number",
    icon: telephone,
    desc1: "(907) 555-0123",
    desc2: "(907) 555-0123",
  },
  {
    id: 2,
    title: "Email",
    icon: email,
    desc1: "E-demo@example.com",
    desc2: "E-demo@example.com",
  },
  {
    id: 3,
    title: "Address",
    icon: location,
    desc1: "Royal Ln. Mesa, New Jersey 45463",
    desc2: "Thornridge Cir. Shiloh, Hawaii 81063",
  }
]