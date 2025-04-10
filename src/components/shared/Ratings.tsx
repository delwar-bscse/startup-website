import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; // Import the icons

interface RatingProps {
  rating: number; // The rating input (0 to 5), including half ratings
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Array to hold the stars
  const stars = [];

  // Loop through 5 positions for the 5 possible stars
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      // If i is less than or equal to the rating (whole stars)
      stars.push(<FaStar key={i} className="text-yellow-500 text-2xl" />);
    } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
      // If it's the next star and we have a half star
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 text-2xl" />);
    } else {
      // Empty stars for the rest
      stars.push(<FaRegStar key={i} className="text-yellow-500 text-2xl" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
