import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Image } from 'cloudinary-react'

const Gallery = () => {
  const [imageIds, setImageIds] = useState('');

  const loadImages = async (res, req) =>{
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImageIds(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadImages();
  },[]);

  return (
    <div>
      <h1 className="title">Gallery</h1>
      {imageIds && imageIds.map((imageId, index) => (
        <Image
        key={index}
        cloudName="dfb1oxmpx"
        publicId={imageId}
        width="300"
        crop="scale"
        borderRadius="10"
        />
      ))}
    </div>
  )
}

export default Gallery
