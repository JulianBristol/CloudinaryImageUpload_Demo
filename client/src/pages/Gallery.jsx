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
      <p>All images have been uploaded by site users.</p>
      <p>Please report any inappropiate images</p>
      {imageIds && imageIds.map((imageId, index) => (
        <Image
        key={index}
        cloudName="dfb1oxmpx"
        publicId={imageId}
        loading="lazy"
        width="300"
        height="300"
        crop="fill"
        style={{ borderRadius: '35px', margin: '10px', cursor: 'pointer' }}
        onClick={() => {
          console.log("image Clicked!")
        }}
        />
      ))}
    </div>
  )
}

export default Gallery
