"use client";

import Image from "next/image";
import React, { useState } from "react";

const ProfileImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-sidebar-accent rounded-full">
      <Image
        src="/images/profile.jpeg"
        alt="photo of Syed Urooj Kamal"
        width={320}
        height={320}
        unoptimized
        className={`rounded-full border-sidebar-accent border-8 transition-opacity duration-200 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default ProfileImage;
