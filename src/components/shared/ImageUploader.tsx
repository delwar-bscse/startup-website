import React, { useState } from 'react';
import { CiImageOn } from "react-icons/ci";
import Image from 'next/image'; // Import the next/image component

const ImageUploader = () => {
  // const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // Ensure the result is a valid base64 string
        if (reader.result && typeof reader.result === 'string') {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-[280px] h-[140px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
      {!imagePreview ? (
        <span className="text-primary">
          <CiImageOn className='text-8xl' />
        </span>
      ) : (
        <Image
          src={imagePreview} // Use the base64 string for the src
          alt="Uploaded Preview"
          width={280} // Set width and height
          height={140}
          objectFit="cover" // Make sure it covers the area properly
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default ImageUploader;
